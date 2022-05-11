from django.urls import path
from .views import (
    api_technician,
    api_technicians,
    api_service,
    api_services,
)

urlpatterns = [
    path(
        "technicians/",
        api_technician,
        name="api_technicians"
    ),
    path(
        "technicians/<int:pk>/",
        api_technicians,
        name="api_technicians"
    ),
    path(
        "services/",
        api_services,
        name="api_services"
    ),
    path(
        "services/<int:pk>/",
        api_service,
        name="api_service"
    ),
]