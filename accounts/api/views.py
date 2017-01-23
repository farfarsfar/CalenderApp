from rest_framework.generics import CreateAPIView
from rest_framework.response import Response
from django.contrib.auth import get_user_model

from .serializers import UserCreateSeriliazer

User = get_user_model()


class UserCreateAPIView(CreateAPIView):
    serializer_class = UserCreateSeriliazer
    queryset = User.objects.all()
