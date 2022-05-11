# from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

from .encoders import (
    SalesPersonEncoder,
    CustomerEncoder,
    SalesRecordEncoder,

)
from .models import SalesPerson, Customer, SalesRecord
# Create your views here.


@require_http_methods(["GET", "POST"])
def api_sales_record(request):
    if request.method == "GET":
        records = SalesRecord.objects.all()
        return JsonResponse(
            {"sales records": records},
            encoder=SalesRecordEncoder,
        )
    else:
        try:  # may have to add vin variable and get the href
            content = json.loads(request.body)
            record = SalesRecord.objects.create(**content)
            return JsonResponse(
                record,
                encoder=SalesRecordEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create a sales record"}
            )
            response.status_code = 400
            return response


@require_http_methods(["GET", "POST"])
def api_sales_person(request):
    if request.method == "GET":
        sales_people = SalesPerson.objects.all()
        return JsonResponse(
            {"sales people": sales_people},
            encoder=SalesPersonEncoder,
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
            encoder=CustomerEncoder,
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
