from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from .encoders import (
    TechnicianEncoder, 
)
from .models import Technician 

@require_http_methods(["GET", "POST"])
def api_technician(request):
    if request.method == "GET":
      technicians = Technician.objects.all()
      return JsonResponse(
        {"technicians": technicians},
        encoder=TechnicianEncoder,
      )
    else:
        try:
            content = json.loads(request.body)
            technicians = Technician.objects.create(**content)
            return JsonResponse(
                technicians,
                encoder=TechnicianEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create the sales person"}
            )
            response.status_code = 400
            return response


# @require_http_methods(["GET", "POST"])
# def api_service(request):
#     if request.method == "GET":
#       services = Service.objects.all()
#       return JsonResponse(
#         {"services": services},
#         encoder=ServiceEncoder,
#       )
#     else:
#         try:
#             content = json.loads(request.body)
#             services = Service.objects.create(**content)
#             return JsonResponse(
#                 services,
#                 encoder=ServiceEncoder,
#                 safe=False,
#             )
#         except:
#             response = JsonResponse(
#                 {"message": "Could not create the sales person"}
#             )
#             response.status_code = 400
#             return response

# @require_http_methods(["DELETE", "GET", "PUT"])
# def api_technician(request, vin):
#     if request.method == "GET":
#         try:
#             technician = Technician.objects.get(vin=vin)
#             return JsonResponse(
#                 technician,
#                 encoder=TechnicianEncoder,
#                 safe=False
#             )
#         except Technician.DoesNotExist:
#             response = JsonResponse({"message": "Does not exist"})
#             response.status_code = 404
#             return response
#     elif request.method == "DELETE":
#         try:
#             technician = Technician.objects.get(vin=vin)
#             technician.delete()
#             return JsonResponse(
#                 technician,
#                 encoder=TechnicianEncoder,
#                 safe=False,
#             )
#         except Technician.DoesNotExist:
#             return JsonResponse({"message": "Does not exist"})
#     else: # PUT
#         try:
#             content = json.loads(request.body)
#             technician = Technician.objects.get(vin=vin)

#             props = ["color", "year"]
#             for prop in props:
#                 if prop in content:
#                     setattr(technician, prop, content[prop])
#             technician.save()
#             return JsonResponse(
#                 technician,
#                 encoder=TechnicianEncoder,
#                 safe=False,
#             )
#         except Technician.DoesNotExist:
#             response = JsonResponse({"message": "Does not exist"})
#             response.status_code = 404
#             return response



# @require_http_methods(["DELETE", "GET", "PUT"])
# def api_service(request, vin):
#     if request.method == "GET":
#         try:
#             service = Service.objects.get(vin=vin)
#             return JsonResponse(
#                 service,
#                 encoder=ServiceEncoder,
#                 safe=False
#             )
#         except Service.DoesNotExist:
#             response = JsonResponse({"message": "Does not exist"})
#             response.status_code = 404
#             return response
#     elif request.method == "DELETE":
#         try:
#             service = Service.objects.get(vin=vin)
#             service.delete()
#             return JsonResponse(
#                 service,
#                 encoder=ServiceEncoder,
#                 safe=False,
#             )
#         except Service.DoesNotExist:
#             return JsonResponse({"message": "Does not exist"})
#     else: # PUT
#         try:
#             content = json.loads(request.body)
#             service = Service.objects.get(vin=vin)

#             props = ["color", "year"]
#             for prop in props:
#                 if prop in content:
#                     setattr(service, prop, content[prop])
#             service.save()
#             return JsonResponse(
#                 service,
#                 encoder=ServiceEncoder,
#                 safe=False,
#             )
#         except Service.DoesNotExist:
#             response = JsonResponse({"message": "Does not exist"})
#             response.status_code = 404
#             return response
