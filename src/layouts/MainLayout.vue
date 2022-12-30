<script setup>
import { ref } from 'vue'
import { basicMsg } from '../plugins/Notify'
import * as ConstantsNotify from '../constants/ConstantsNotify'
import GoogleMaps from 'src/components/GoogleMaps.vue'

const leftDrawerOpen = ref(false)

function message () {
  basicMsg(ConstantsNotify.MSG_TEST,
    ConstantsNotify.ICON_INFO,
    ConstantsNotify.COLOR_SKY_BLUE,
    ConstantsNotify.POS_TOP,
    ConstantsNotify.TIME_ONE_SEC)
}
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Patitas al Rescate Jrz
        </q-toolbar-title>

        <q-btn
          flat
          dense
          round
          icon="logout"
          @click="message()"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :width="200"
        :breakpoint="400"
      >
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 120px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="star" />
              </q-item-section>

              <q-item-section>
                Meritos
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="search" />
              </q-item-section>

              <q-item-section>
                Lista de Busqueda
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="message" />
              </q-item-section>

              <q-item-section>
                Chats
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="settings" />
              </q-item-section>

              <q-item-section>
                Editar Perfil
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 175px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <div class="text-weight-bold">Oswaldo Escobedo</div>
            <div>@oescobedo3</div>
          </div>
        </q-img>
      </q-drawer>

    <q-page-container>
      <keep-alive>
        <GoogleMaps/>
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>
