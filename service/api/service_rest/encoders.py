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