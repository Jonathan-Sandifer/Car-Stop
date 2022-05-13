from common.json import ModelEncoder
from .models import Technician

# class VinEncoder(ModelEncoder):
#     model = Vin
#     properties = [
#         "import_href",
#         "vin",
#     ]

class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        "id",
        "name",
        "employee_number",
    ]

# class ServiceEncoder(ModelEncoder):
#     model = Service
#     properties = [
#         "id",
#         "vin",
#         "customer_name",
#         "date",
#         "time",
#         "technician",
#         "reason",
#     ]
#     encoders = {
#         "technician": TechnicianEncoder(),
#         "vin": VinEncoder(),

#     }

# class ServiceHistoryEncoder(ModelEncoder):
#     models = ServiceHistory
#     properties  = [
#         "id",
#         "service",

#     ]