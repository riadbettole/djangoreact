from . models import *
from . serializer import *

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from django.shortcuts import render

import webuiapi
import base64
from PIL import Image
from io import BytesIO


# Create your views here.

class StableDiffusion(APIView):
    def post(self, request):
        api = webuiapi.WebUIApi(host='127.0.0.1', port=7861)

        
        promptWeb  = request.data.get('promptWeb', '')
        userImage  = request.data.get('imageOfUser', '')
        
        image_data = base64.b64decode(userImage[22:])
        image_buffer = BytesIO(image_data)
        pil_image = Image.open(image_buffer)
        
        result2 = api.img2img(images=[pil_image], 
                    prompt=promptWeb,
                    cfg_scale=7, 
                    styles=["anime"],
                    denoising_strength=0.65,
                    negative_prompt="human",
                    steps=50,
                    )
        
        processed_image_bytes = BytesIO()
        result2.image.save(processed_image_bytes, format='PNG')
        processed_image_bytes.seek(0)
        image = base64.b64encode(processed_image_bytes.read())

        return Response({'processed_image': image}, status=status.HTTP_200_OK)


