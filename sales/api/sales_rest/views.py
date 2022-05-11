# from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

from .encoders import (
    SalesPersonEncoder,
    CustomerEncoder,
)
from .models import SalesPerson, Customer
# Create your views here.


@require_http_methods(["GET", "POST"])
def api_sales_person(request):
    if request.method == "GET":
        sales_people = SalesPerson.objects.all()
        return JsonResponse(
            {"sales people": sales_people},
            encoder=SalesPersonEncoder,  # make a sales person data encoder in encoders py file
        )
    else:
        try:
            content = json.loads(request.body)
            sales_person = SalesPerson.objects.create(**content)
            return JsonResponse(
                sales_person,
                encoder=SalesPersonEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create the sales person"}
            )
            response.status_code = 400
            return response


@require_http_methods(["GET", "POST"])
def api_customer(request):
    if request.method == "GET":
        customers = Customer.objects.all()
        return JsonResponse(
            {"customers": customers},
            encoder=CustomerEncoder,  # create encoder for customer data
        )
    else:
        try:
            content = json.loads(request.body)
            customer = Customer.objects.create(**content)
            return JsonResponse(
                customer,
                encoder=CustomerEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create the customer"}
            )
            response.status_code = 400
            return response
