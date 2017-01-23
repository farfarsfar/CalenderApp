from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^login/?$', views.UserAuthAPI.as_view()),
]