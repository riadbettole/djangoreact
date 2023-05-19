from . models import *
from . serializer import *

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from django.shortcuts import render
from django.http import JsonResponse, HttpResponse

import webuiapi
import base64
from PIL import Image
import io
from io import BytesIO
import logging

# Create your views here.


class ReactView(APIView):

    serializer_class = ReactSerializer

    def get(self, request):
        output = [{"employee": output.employee, "department": output.departement}
                  for output in React.objects.all()]
        return Response(output)

    def post(self, request):

        serializer = ReactSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
        

class StableDiffusion(APIView):
    def post(self, request, *args, **kwargs):
        api = webuiapi.WebUIApi(host='127.0.0.1', port=7861)

        # promptWeb  = request.POST.get('promptWeb', '')
        promptWeb  = request.data.get('promptWeb', '')
        userImage  = request.data.get('imageOfUser', '')
        with open('FUCKINGHELL.txt', 'w') as file:
            file.write(userImage[22:])
        image_data = base64.b64decode(userImage[22:])
        image_buffer = BytesIO(image_data)
        pil_image = Image.open(image_buffer)
        with open('decoded_image.jpg', 'wb') as image_file:
            image_file.write(image_data)
        result2 = api.img2img(images=[pil_image], 
                    prompt=promptWeb,
                    cfg_scale=7, 
                    styles=["anime"],
                    denoising_strength=0.65,
                    negative_prompt="human",
                    steps=50,
                    )
        # result2.image
        # result1 = api.txt2img(prompt=promptWeb,
        #             negative_prompt="ugly, out of frame",
        #             styles=["anime"],
        #             cfg_scale=13,
        #             )
        # (result1.image).save('ryad.png')
        processed_image_bytes = BytesIO()
        result2.image.save(processed_image_bytes, format='PNG')
        processed_image_bytes.seek(0)
        image = base64.b64encode(processed_image_bytes.read()).decode()

        return Response({'processed_image': image}, status=status.HTTP_200_OK)


