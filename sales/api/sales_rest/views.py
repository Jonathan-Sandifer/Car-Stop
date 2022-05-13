# from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

from .encoders import (
    SalesPersonEncoder,
    CustomerEncoder,
    SalesRecordEncoder,

)
from .models import SalesPerson, Customer, SalesRecord, VinVO
# Create your views here.


@require_http_methods(["GET"])
def api_show_sale_history(request, sales_person=None):
    if request.method == "GET":
        try:
            record = SalesRecord.objects.filter(sales_person=sales_person)
            # print("over here:", record)
            return JsonResponse(
                record,
                encoder=SalesRecordEncoder,
                safe=False
            )
        except SalesRecord.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid Record"},
                status=400
            )


@require_http_methods(["GET", "POST"])
def api_sales_record(request):
    if request.method == "GET":
        records = SalesRecord.objects.all()
        return JsonResponse(
            {"sales_records": records},
            encoder=SalesRecordEncoder,
        )
    else:
        content = json.loads(request.body)

        try:
            vin = VinVO.objects.get(import_href=content["Vin_number"])
            content["Vin_number"] = vin
        except VinVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid vin href"},
                status=400
            )
        try:
            customer = Customer.objects.get(id=content["customer"])
            content["customer"] = customer
        except Customer.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid customer"},
                status=400
            )
        try:
            sales_person = SalesPerson.objects.get(id=content["sales_person"])
            content["sales_person"] = sales_person
        except SalesPerson.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid sales person"},
                status=400
            )

        record = SalesRecord.objects.create(**content)
        return JsonResponse(
            record,
            encoder=SalesRecordEncoder,
            safe=False
        )


@require_http_methods(["GET", "POST"])
def api_sales_person(request):
    if request.method == "GET":
        sales_people = SalesPerson.objects.all()
        return JsonResponse(
            {"sales_people": sales_people},
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
