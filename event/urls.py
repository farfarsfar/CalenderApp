from django.conf.urls import url
from . import views

urlpatterns = [

    # Swallow Rest of URLS
    url(r'^.*$', views.home, name='home'),
]