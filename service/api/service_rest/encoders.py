from common.json import ModelEncoder
from .models import Technician, Service

class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        "id",
        "technician",
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