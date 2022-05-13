from common.json import ModelEncoder
from .models import Technician, Service, VinVO

class VinVoEncoder(ModelEncoder):
    model = VinVO
    properties = [
        "import_href",
        "vin",
    ]

class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        "id",
        "name",
        "employee_number",
    ]

class ServiceEncoder(ModelEncoder):
    model = Service
    properties = [
        "id",
        "vin",
        "customer_name",
        "date",
        "time",
        "technician",
        "reason",
    ]
    encoders = {
        "technician": TechnicianEncoder(),
        "vin": VinVoEncoder(),

    }

# class ServiceHistoryEncoder(ModelEncoder):
#     models = ServiceHistory
#     properties  = [
#         "id",
#         "service",

#     ]