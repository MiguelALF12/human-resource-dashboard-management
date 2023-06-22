from django.urls import path, include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls

from .viewsPkg.empleados import EmpleadosViews
from .viewsPkg.contratos import ContratosViews
from .viewsPkg.documentosEmpleados import DocumentosEmpleadosViews
from .viewsPkg.actividades import ActividadesViews
from.viewsPkg.empleadoEnActividades import EmpleadoEnActividadesViews
from .viewsPkg.examen import ExamenViews
from .viewsPkg.liquidaciones import LiquidacionesViews
from .viewsPkg.retiros import RetirosViews

router = routers.DefaultRouter()
router.register(r'empleados', EmpleadosViews, 'empleados')
router.register(r'documentosempleados', DocumentosEmpleadosViews, 'documentosempleados')
router.register(r'contratos', ContratosViews, 'contratos')
router.register(r'actividades', ActividadesViews, 'actividades')
router.register(r'empleadoenactividades', EmpleadoEnActividadesViews, 'empleadoenactividades')
router.register(r'examen', ExamenViews, 'examen')
router.register(r'liquidaciones', LiquidacionesViews, 'liquidaciones')
router.register(r'retiros', RetirosViews, 'retiros')


urlpatterns = [
    path("api/v1/", include(router.urls)),
    path("docs/", include_docs_urls(title="vista_analista API"))
]