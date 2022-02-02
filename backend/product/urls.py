from django.urls import path
from rest_framework.routers import SimpleRouter
from product.views import VariantViewSet,ProductViewSet, ProductVariantViewSet, ProductVariantPriceViewSet
app_name = 'product'

router=SimpleRouter()
router.register('variants', VariantViewSet, basename='variants')
router.register('products', ProductViewSet, basename='products')
router.register('product-variants', ProductVariantViewSet, basename='product-variants')
router.register('product-price', ProductVariantPriceViewSet, basename='product-price')
urlpatterns = router.urls
