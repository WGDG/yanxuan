import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import Classify from '@/views/classify'
import ShoppingCart from '@/views/shoppingCart'
import Personal from '@/views/personal'
import PriceList from '@/views/PriceList'
import Strict from '@/views/strict'
import Detail from '@/views/detail'
import Reviews from '@/components/detail/detailShoppingReviews'
import Introduction from '@/components/detail/detailShoppingIntroduction'
import Address from '@/views/address'
import DetailChoice from '@/components/choice/detail-choice'
import Denglu from '@/views/denglu'
import FirmOrder from '@/views/firm-order'
import ConfirmPayment from '@/views/confirm-payment'
import NewAddress from '@/views/new-address'
import Deaddress from '@/components/address/deaddress'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/classify',
      name: 'classify',
      component: Classify
    },
    {
      path: '/shoppingCart',
      name: 'shoppingCart',
      component: ShoppingCart
    },
    {
      path: '/personal',
      name: 'personal',
      component: Personal
    },
    {
      path: '/pricelist',
      name: 'pricelist',
      component: PriceList
    },
    {
      path: '/strict',
      name: 'strict',
      component: Strict
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail,
      children: [
        {
          path: '/detail/:id/introduction',
          name: 'introduction',
          component: Introduction
        },
        {
          path: '/detail/:id/reviews',
          name: 'reviews',
          component: Reviews
        }
      ],redirect: '/detail/:id/introduction'
    },
    {
      path: '/address',
      name: 'address',
      component: Address
    },
    {
      path: '/detailChoice/:id',
      name: 'detailChoice',
      component: DetailChoice
    },
    {
      path: '/denglu',
      name: 'denglu',
      component: Denglu
    },
    {
      path: '/firmOrder',
      name: 'firmOrder',
      component: FirmOrder
    },
    {
      path: '/confirmPayment',
      name: 'confirmPayment',
      component: ConfirmPayment
    },
    {
      path: '/newAddress',
      name: 'newAddress',
      component: NewAddress
    },
    {
      path: '/deaddress/:id',
      name: 'deaddress',
      component: Deaddress
    }
  ]

})


