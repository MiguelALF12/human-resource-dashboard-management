from django.urls import path, include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls

from .viewsPkg.empleados import EmpleadosViews
from .viewsPkg.contratos import ContratosViews
router = routers.DefaultRouter()
router.register(r'empleados', EmpleadosViews, 'empleados')
router.register(r'contratos', ContratosViews, 'contratos')
urlpatterns = [
    path("api/v1/", include(router.urls)),
    path("docs/", include_docs_urls(title="vista_analista API"))
]