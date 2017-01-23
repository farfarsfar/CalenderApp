"""CalenderApp URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.conf.urls.static import static
from django.contrib import admin
from django.conf import settings
# from django.contrib.auth import views as auth_views, urls
from rest_framework.urlpatterns import format_suffix_patterns
from event import views

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    # Django Auth Urls
    # url('^accounts/', include('django.contrib.auth.urls')),

    # Custom Auth URLS
    url(r'accounts/', include('accounts.urls')),

    # API Urls
    url(r'^api/$', views.EventsList.as_view()),
    url(r'^api/(?P<pk>[0-9]+)$', views.EventDetail.as_view()),
    url(r'api/users/', include('accounts.api.urls')),

    # Swallow all the urls to Angular
    url(r'', include('event.urls')),
]

urlpatterns = format_suffix_patterns(urlpatterns)

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)