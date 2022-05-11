from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from common.json import ModelEncoder
from .models import Technician, Service

class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        "technician",
        "employee_number",
    ]

class ServiceEncoder(ModelEncoder):
    model = Service
    properties = [
        "vin",
        "customer_name",
        "date",
        "time",
        "technician",
        "reason",
    ]

@require_http_methods(["GET", "POST"])
def api_hats_list(request):
    if request.method == "GET":
      hats = Hat.objects.all()
      return JsonResponse(
        hats,
        encoder=HatEncoder,
        safe=False
      )
    else: #POST
        content = json.loads(request.body)

        try:
            location = LocationVO.objects.get(import_href=content["location"])
            content["location"] = location
        except LocationVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid location href"},
                status=400,
            )

        hat = Hat.objects.create(**content)
        return JsonResponse(
          hat,
          encoder=HatEncoder,
          safe=False
        )

@require_http_methods(["DELETE", "GET", "PUT"])
def api_automobile(request, vin):
    if request.method == "GET":
        try:
            auto = Automobile.objects.get(vin=vin)
            return JsonResponse(
                auto,
                encoder=AutomobileEncoder,
                safe=False
            )
        except Automobile.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response
    elif request.method == "DELETE":
        try:
            auto = Automobile.objects.get(vin=vin)
            auto.delete()
            return JsonResponse(
                auto,
                encoder=AutomobileEncoder,
                safe=False,
            )
        except Automobile.DoesNotExist:
            return JsonResponse({"message": "Does not exist"})
    else: # PUT
        try:
            content = json.loads(request.body)
            auto = Automobile.objects.get(vin=vin)

            props = ["color", "year"]
            for prop in props:
                if prop in content:
                    setattr(auto, prop, content[prop])
            auto.save()
            return JsonResponse(
                auto,
                encoder=AutomobileEncoder,
                safe=False,
            )
        except Automobile.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response

@require_http_methods(["GET", "POST"])
def api_automobiles(request):
    if request.method == "GET":
        autos = Automobile.objects.all()
        return JsonResponse(
            {"autos": autos},
            encoder=AutomobileEncoder,
        )
    else:
        try:
            content = json.loads(request.body)
            model_id = content["model_id"]
            model = VehicleModel.objects.get(pk=model_id)
            content["model"] = model
            auto = Automobile.objects.create(**content)
            return JsonResponse(
                auto,
                encoder=AutomobileEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create the automobile"}
            )
            response.status_code = 400
            return response


@require_http_methods(["DELETE", "GET", "PUT"])
def api_automobile(request, vin):
    if request.method == "GET":
        try:
            auto = Automobile.objects.get(vin=vin)
            return JsonResponse(
                auto,
                encoder=AutomobileEncoder,
                safe=False
            )
        except Automobile.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response
    elif request.method == "DELETE":
        try:
            auto = Automobile.objects.get(vin=vin)
            auto.delete()
            return JsonResponse(
                auto,
                encoder=AutomobileEncoder,
                safe=False,
            )
        except Automobile.DoesNotExist:
            return JsonResponse({"message": "Does not exist"})
    else: # PUT
        try:
            content = json.loads(request.body)
            auto = Automobile.objects.get(vin=vin)

            props = ["color", "year"]
            for prop in props:
                if prop in content:
                    setattr(auto, prop, content[prop])
            auto.save()
            return JsonResponse(
                auto,
                encoder=AutomobileEncoder,
                safe=False,
            )
        except Automobile.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response
