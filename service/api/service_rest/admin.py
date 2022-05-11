from django.contrib import admin

from .models import Technician, Service

@admin.register(Technician)
class TechnicianAdmin(admin.ModelAdmin):
    pass

@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    pass


