
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'CategoryCard': typeof import("../components/CategoryCard.vue")['default']
    'Footer': typeof import("../components/Footer.vue")['default']
    'Header': typeof import("../components/Header.vue")['default']
    'ProductCard': typeof import("../components/ProductCard.vue")['default']
    'SearchBar': typeof import("../components/SearchBar.vue")['default']
    'IconsCarIcon': typeof import("../components/icons/CarIcon.vue")['default']
    'IconsChatIcon': typeof import("../components/icons/ChatIcon.vue")['default']
    'IconsClothesIcon': typeof import("../components/icons/ClothesIcon.vue")['default']
    'IconsComputerIcon': typeof import("../components/icons/ComputerIcon.vue")['default']
    'IconsElectronicsIcon': typeof import("../components/icons/ElectronicsIcon.vue")['default']
    'IconsFashionIcon': typeof import("../components/icons/FashionIcon.vue")['default']
    'IconsFreeIcon': typeof import("../components/icons/FreeIcon.vue")['default']
    'IconsHomeIcon': typeof import("../components/icons/HomeIcon.vue")['default']
    'IconsJobIcon': typeof import("../components/icons/JobIcon.vue")['default']
    'IconsPhoneIcon': typeof import("../components/icons/PhoneIcon.vue")['default']
    'IconsShieldIcon': typeof import("../components/icons/ShieldIcon.vue")['default']
    'IconsSportsIcon': typeof import("../components/icons/SportsIcon.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtTime': typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyCategoryCard': LazyComponent<typeof import("../components/CategoryCard.vue")['default']>
    'LazyFooter': LazyComponent<typeof import("../components/Footer.vue")['default']>
    'LazyHeader': LazyComponent<typeof import("../components/Header.vue")['default']>
    'LazyProductCard': LazyComponent<typeof import("../components/ProductCard.vue")['default']>
    'LazySearchBar': LazyComponent<typeof import("../components/SearchBar.vue")['default']>
    'LazyIconsCarIcon': LazyComponent<typeof import("../components/icons/CarIcon.vue")['default']>
    'LazyIconsChatIcon': LazyComponent<typeof import("../components/icons/ChatIcon.vue")['default']>
    'LazyIconsClothesIcon': LazyComponent<typeof import("../components/icons/ClothesIcon.vue")['default']>
    'LazyIconsComputerIcon': LazyComponent<typeof import("../components/icons/ComputerIcon.vue")['default']>
    'LazyIconsElectronicsIcon': LazyComponent<typeof import("../components/icons/ElectronicsIcon.vue")['default']>
    'LazyIconsFashionIcon': LazyComponent<typeof import("../components/icons/FashionIcon.vue")['default']>
    'LazyIconsFreeIcon': LazyComponent<typeof import("../components/icons/FreeIcon.vue")['default']>
    'LazyIconsHomeIcon': LazyComponent<typeof import("../components/icons/HomeIcon.vue")['default']>
    'LazyIconsJobIcon': LazyComponent<typeof import("../components/icons/JobIcon.vue")['default']>
    'LazyIconsPhoneIcon': LazyComponent<typeof import("../components/icons/PhoneIcon.vue")['default']>
    'LazyIconsShieldIcon': LazyComponent<typeof import("../components/icons/ShieldIcon.vue")['default']>
    'LazyIconsSportsIcon': LazyComponent<typeof import("../components/icons/SportsIcon.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtTime': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const CategoryCard: typeof import("../components/CategoryCard.vue")['default']
export const Footer: typeof import("../components/Footer.vue")['default']
export const Header: typeof import("../components/Header.vue")['default']
export const ProductCard: typeof import("../components/ProductCard.vue")['default']
export const SearchBar: typeof import("../components/SearchBar.vue")['default']
export const IconsCarIcon: typeof import("../components/icons/CarIcon.vue")['default']
export const IconsChatIcon: typeof import("../components/icons/ChatIcon.vue")['default']
export const IconsClothesIcon: typeof import("../components/icons/ClothesIcon.vue")['default']
export const IconsComputerIcon: typeof import("../components/icons/ComputerIcon.vue")['default']
export const IconsElectronicsIcon: typeof import("../components/icons/ElectronicsIcon.vue")['default']
export const IconsFashionIcon: typeof import("../components/icons/FashionIcon.vue")['default']
export const IconsFreeIcon: typeof import("../components/icons/FreeIcon.vue")['default']
export const IconsHomeIcon: typeof import("../components/icons/HomeIcon.vue")['default']
export const IconsJobIcon: typeof import("../components/icons/JobIcon.vue")['default']
export const IconsPhoneIcon: typeof import("../components/icons/PhoneIcon.vue")['default']
export const IconsShieldIcon: typeof import("../components/icons/ShieldIcon.vue")['default']
export const IconsSportsIcon: typeof import("../components/icons/SportsIcon.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyCategoryCard: LazyComponent<typeof import("../components/CategoryCard.vue")['default']>
export const LazyFooter: LazyComponent<typeof import("../components/Footer.vue")['default']>
export const LazyHeader: LazyComponent<typeof import("../components/Header.vue")['default']>
export const LazyProductCard: LazyComponent<typeof import("../components/ProductCard.vue")['default']>
export const LazySearchBar: LazyComponent<typeof import("../components/SearchBar.vue")['default']>
export const LazyIconsCarIcon: LazyComponent<typeof import("../components/icons/CarIcon.vue")['default']>
export const LazyIconsChatIcon: LazyComponent<typeof import("../components/icons/ChatIcon.vue")['default']>
export const LazyIconsClothesIcon: LazyComponent<typeof import("../components/icons/ClothesIcon.vue")['default']>
export const LazyIconsComputerIcon: LazyComponent<typeof import("../components/icons/ComputerIcon.vue")['default']>
export const LazyIconsElectronicsIcon: LazyComponent<typeof import("../components/icons/ElectronicsIcon.vue")['default']>
export const LazyIconsFashionIcon: LazyComponent<typeof import("../components/icons/FashionIcon.vue")['default']>
export const LazyIconsFreeIcon: LazyComponent<typeof import("../components/icons/FreeIcon.vue")['default']>
export const LazyIconsHomeIcon: LazyComponent<typeof import("../components/icons/HomeIcon.vue")['default']>
export const LazyIconsJobIcon: LazyComponent<typeof import("../components/icons/JobIcon.vue")['default']>
export const LazyIconsPhoneIcon: LazyComponent<typeof import("../components/icons/PhoneIcon.vue")['default']>
export const LazyIconsShieldIcon: LazyComponent<typeof import("../components/icons/ShieldIcon.vue")['default']>
export const LazyIconsSportsIcon: LazyComponent<typeof import("../components/icons/SportsIcon.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>

export const componentNames: string[]
