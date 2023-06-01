"""
Este codigo genera todas las rutas GET, POST, PUT, DELETE.

routers.DefaultRouter() - se generan ruta del siguiente estilo: https://www.django-rest-framework.org/api-guide/routers/#defaultrouter
router.register() - registra las rutas para un modelo especifico, y a partir de este se generan rutas
"""
from django.urls import path, include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls

from .viewsPkg.aplicantes import AplicantesViews
from .viewsPkg.documentosAplicantes import DocumentosAplicantesViews
from .viewsPkg.ofertas import OfertasViews
from .viewsPkg.seleccionados import SeleccionadosViews
from .viewsPkg.aplicaciones import AplicacionesViews

router = routers.DefaultRouter()
router.register(r'aplicantes', AplicantesViews, 'aplicantes')
router.register(r'ofertas', OfertasViews, 'ofertas')
router.register(r'aplicaciones', AplicacionesViews, 'aplicaciones')
router.register(r'seleccionados', SeleccionadosViews, 'seleccionados')
router.register(r'documentosaplicante',
                DocumentosAplicantesViews, 'documentosaplicantes')

urlpatterns = [
    path("api/v1/", include(router.urls)),
    path("docs/", include_docs_urls(title="vista_usuarios API"))
]
