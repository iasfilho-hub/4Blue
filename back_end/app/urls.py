from django.urls import path
from . import views

urlpatterns = [
    path('mensagem/', views.send_msg, name='send_msg'),
    path('historico/<str:user>/', views.history, name='history'),
    path('limpar/<str:user>/', views.limpar_historico, name='limpar_historico'),
]