from django.shortcuts import render, get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from rest_framework.permissions import IsAuthenticated
from .models import Event
from .seriliazers import EventSerializer


# Create your views here.
def home(req):
    return render(req, 'base.html')


class EventsList(APIView):

    def get(self, request):
        # Get Objects from Model
        events = Event.objects.all()
        print(events)
        # Convert it to JSON, so it returns more then one object
        serializer = EventSerializer(events, many=True)
        return Response(serializer.data)

    def post(self, request):
        pass
