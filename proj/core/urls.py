from django.urls import path
from . import views


urlpatterns = [
    path('', views.cars_list, name='car_list'),
]
