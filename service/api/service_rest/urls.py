from django.urls import path

from .views import (
    api_technician,
)

urlpatterns = [
    path(
        'technician/',
        api_technician,
        name="api_technician"
    ),
]