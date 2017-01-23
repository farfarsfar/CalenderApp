from django.conf.urls import url
from . import views

urlpatterns = [
    # API URLS
    url(r'^register/?$', views.UserCreateAPIView.as_view(), name='register'),
]
