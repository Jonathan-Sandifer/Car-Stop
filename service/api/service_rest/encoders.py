from common.json import ModelEncoder
from .models import Technician, AutomobileVO, Service

class AutomobileVODetailEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
    ]


class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        "name",
        "employee_number",
        "id"
    ]

class ServiceListEncoder(ModelEncoder): 
    model = Service
    properties = [
        "id",
        "vin",
        "customer",
        "date_time",
        "technician",
        "reason",
        "is_vip",
        "is_finished"
    ]
    encoders = {
        "technician": TechnicianEncoder(),
    }


class ServiceDetailEncoder(ModelEncoder):
    model = Service
    properties = [
        "vin",
        "customer",
        "date_time",
        "technician",
        "reason",
        "is_vip",
    ]
    encoders = {
        "technician": TechnicianEncoder(),
    }
