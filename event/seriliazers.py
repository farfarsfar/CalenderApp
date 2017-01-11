from rest_framework import serializers
from .models import Event


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        # Seriliaze all
        fields = '__all__'
        # Chose Fields
        # field = ('ticker', 'volume')
