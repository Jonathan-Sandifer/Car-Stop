from django.contrib import admin
from .models import SalesPerson, Customer, SalesRecord, VinVO
# Register your models here.

admin.site.register(SalesPerson)
admin.site.register(Customer)
admin.site.register(SalesRecord)
admin.site.register(VinVO)
