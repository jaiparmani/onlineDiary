from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import PostSerializer, TypesOfPostsSerializer, LoginSerializer
from django.contrib.auth import  authenticate
from .models import Post,  TypesOfPosts
from rest_framework_simplejwt.tokens import RefreshToken
 
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
    posts = Post.objects.all().order_by('timestamp')[::-1]
    serializer = PostSerializer(posts, many=True)
    print((serializer.data))
    return Response(serializer.data)


@api_view(['GET'])
def typesOfPostsList(request):
    posts = TypesOfPosts.objects.all()
    serializer = TypesOfPostsSerializer(posts, many=True)
    return Response(serializer.data)




class LoginAPI(APIView):
    def post(self, request):
        try:
            data = request.data
            serializer = LoginSerializer(data = data)
            print(serializer)
            if serializer.is_valid():
                email = serializer.data["email"]
                password = serializer.data["password"]
                print(email, password)
                user = authenticate(username = email, password = password )
                print(user)
                print(authenticate())
                if user is None:
                    return Response({
                'status':400,
                'message':"Invalid Password",
                "data":serializer.errors
                 })
                refresh = RefreshToken.for_user(user)
                if user.is_staff is False:
                    return Response({
                'status':400,
                'message':"Your account is not verified",
                "data":serializer.errors
                 })

                return Response({
        'refresh': str(refresh),
        'access': str(refresh.access_token),
        "msg":"heres the token"
    } )
#     {
# "email":"jaiparmani40@gmail.com",
# "password":"user1234"
# }

            else:
                return Response({
                'status':400,
                'message':"Something Went Wrong",
                "data":serializer.errors
                 })
        except Exception as e:
            return Response({
                'status':400,
                'message':"Something Went Wrong",
                "data": "An exception occured" + str(e)
                 })
