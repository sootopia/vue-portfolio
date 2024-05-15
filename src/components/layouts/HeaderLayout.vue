<template>
  <header class="header">
    <div class="header__container w-full h-full flex justify-between items-center px-6">
      <h1 class="logo"><a href="/">SHP.</a></h1>
      <nav class="navbar">
        <ul>
          <li><a href="#none" @click.prevent="emitScrollTo('heroSectionRef')">Intro</a></li>
          <li><a href="#none" @click.prevent="emitScrollTo('aboutSectionRef')">About</a></li>
          <li><a href="#none" @click.prevent="emitScrollTo('skillSectionRef')">Skills</a></li>
          <li><a href="#none" @click.prevent="emitScrollTo('worksSectionRef')">Projects</a></li>
          <li><a href="#none" @click.prevent="emitScrollTo('')">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    emitScrollTo(sectionRef) {
      this.$emit('scrollTo', sectionRef);
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  inset: 0;
  height: 70px;
  border-bottom: 1px solid transparent;
  transition:
    height 0.3s ease,
    border-color 0.3s ease,
    background-color 0.3s ease,
    backdrop-filter 0.3s ease;
  z-index: 990;

  .logo {
    > a {
      @include flexbox(inline, center, center);
      position: relative;
      font-size: 30px;
      font-weight: 900;
      color: $white;
      line-height: 1;
      padding: 0 10px;
      height: 46px;
      border: 3px solid $white;
      z-index: 5;
      overflow: hidden;
      transition: color 0.3s ease;

      &::before {
        content: '';
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        background-color: $white;
        transform: translateX(-115%) skewX(-50deg);
        transition: transform 0.3s ease;
        z-index: -1;
      }

      &:hover {
        color: $black;

        &::before {
          transform: translateX(0) skewX(0deg);
        }
      }
    }
  }

  .navbar {
    > ul {
      font-size: 0;

      > li {
        display: inline-block;

        & + li {
          margin-left: 8px;
        }

        > a {
          @include flexbox(inline, center, center);
          height: 40px;
          font-size: 15px;
          font-weight: 600;
          color: rgba($white, 80%);
          padding: 0 16px;
          border-radius: 8px;

          &:hover {
            color: $white;
            background-color: rgba($white, 8%);
          }
        }
      }
    }
  }

  &.header--sticky {
    height: 60px;
    background-color: rgba($black, 90%);
    backdrop-filter: blur(10px);

    &.sticky--light {
      border-color: rgba(#212529, 8%);
      background-color: rgba($white, 60%);

      .logo {
        > a {
          color: $black;
          border-color: $black;

          &::before {
            background-color: $black;
          }

          &:hover {
            color: $white;
          }
        }
      }

      .navbar {
        > ul {
          > li {
            > a {
              color: tint($black, 30%);

              &:hover {
                color: $black;
                background-color: rgba($black, 5%);
              }
            }
          }
        }
      }
    }
  }
}
</style>
