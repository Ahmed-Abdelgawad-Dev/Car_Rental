from django.contrib import admin
from django.urls import path, include
from core.views import frontend

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', frontend, name='frontend'),
    path("__reload__/", include("django_browser_reload.urls")),
]
