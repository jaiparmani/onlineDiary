from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import PostSerializer, TypesOfPostsSerializer
from .models import Post,  TypesOfPosts
# Create your views here.
def index(request):
    return HttpResponse("Hello from the other side")
@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        # 'List': '/subject-list/',
        # 'Detail View': '/subject-detail/<str:pk>/',
        # 'Create': '/subject-create/',
        # 'Update': '/subject-update/<str:pk>/',
        # 'Delete': '/subject-delete/<str:pk>/',
    }

    return Response(api_urls)


@api_view(['POST'])
def create_blog(request):
    serializer = PostSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    else:
        print("SERIALIZER VALID:",serializer.is_valid())
        print("SERIA",serializer.errors)

    return Response(serializer.data)
#     {
# "subject":"1",
# "text":"Leetcode Striver"
# } 

    
@api_view(['GET'])
def postList(request):
    posts = Post.objects.all()
    serializer = PostSerializer(posts, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def typesOfPostsList(request):
    posts = TypesOfPosts.objects.all()
    serializer = TypesOfPostsSerializer(posts, many=True)
    return Response(serializer.data)


