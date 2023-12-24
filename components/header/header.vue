<template>
  <header class="bg-white">
    <div class="alley py-2 lg:py-4 flex items-center justify-between">
      <div class="flex items-center gap-2 lg:gap-8">
        <AtomIconMenu />
        <AtomIconLogo />
        <HeaderNavigation />
      </div>

      <div class="flex items-center gap-4 lg:gap-6">
        <div class="flex items-center gap-4">
          <AtomIconSearch />
          <span class="w-[1px] h-[22px] bg-[#FFEAD2] hidden lg:flex"></span>
          <AtomIconBell />
          <span class="w-[1px] h-[22px] bg-[#FFEAD2] hidden lg:flex"></span>
          <AtomImgAvatar />
        </div>
        <div class="hidden lg:flex items-center gap-8 ">
          <HeaderAdd />
          <HeaderI18n />
        </div>
      </div>
    </div>
  </header>
</template>
