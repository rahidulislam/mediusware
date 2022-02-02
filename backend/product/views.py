from rest_framework import generics
from rest_framework import viewsets
from product.serializers import (
    VariantSerializer,
    ProductSerializer,
    ProductImageSerializer,
    ProductVariantSerializer,
    ProductVariantPriceSerializer
)
from product.models import (
    Variant,
    Product,
    ProductImage,
    ProductVariant,
    ProductVariantPrice
)
from django.db.models import Prefetch
# Create your views here.

class VariantViewSet(viewsets.ModelViewSet):
    queryset = Variant.objects.all()
    serializer_class = VariantSerializer


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductVariantViewSet(viewsets.ModelViewSet):
    queryset = ProductVariant.objects.all()
    serializer_class = ProductVariantSerializer

class ProductVariantPriceViewSet(viewsets.ModelViewSet):
    queryset = ProductVariantPrice.objects.all()
    serializer_class = ProductVariantPriceSerializer
