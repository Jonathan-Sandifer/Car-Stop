from django.urls import path
from .views import (
    api_technician,
    api_service,
)

urlpatterns = [
    path(
        "technicians/",
        api_technician,
        name="api_technicians"
    ),
    path(
        "services/",
        api_service,
        name="api_services"
    ),
]