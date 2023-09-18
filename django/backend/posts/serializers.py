from rest_framework import serializers
from .models import Post


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ("title", "content")

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation["id"] = instance.id
        return representation
