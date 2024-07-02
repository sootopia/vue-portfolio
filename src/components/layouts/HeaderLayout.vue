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
          <li><a href="#none" @click.prevent="emitScrollTo('contactSectionRef')">Contact</a></li>
        </ul>
      </nav>

      <button class="hamburger__button sm:hidden outline-none" @click="handleToggleNaigation">
        <svg viewBox="0 0 100 100" width="48">
          <path
            class="hamburger__line hamburger__line--top"
            d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
          />
          <path class="hamburger__line hamburger__line--middle" d="m 30,50 h 40" />
          <path
            class="hamburger__line hamburger__line--bottom"
            d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
          />
        </svg>
      </button>

      <Transition name="mobile__navbar">
        <nav class="mobile__navbar sm:hidden" v-if="showMobileNavbar">
          <ul>
            <li>
              <a
                href="#none"
                @click.prevent="
                  emitScrollTo('heroSectionRef');
                  handleToggleNaigation();
                "
                >Intro</a
              >
            </li>
            <li>
              <a
                href="#none"
                @click.prevent="
                  emitScrollTo('aboutSectionRef');
                  handleToggleNaigation();
                "
                >About</a
              >
            </li>
            <li>
              <a
                href="#none"
                @click.prevent="
                  emitScrollTo('skillSectionRef');
                  handleToggleNaigation();
                "
                >Skills</a
              >
            </li>
            <li>
              <a
                href="#none"
                @click.prevent="
                  emitScrollTo('worksSectionRef');
                  handleToggleNaigation();
                "
                >Projects</a
              >
            </li>
            <li>
              <a
                href="#none"
                @click.prevent="
                  emitScrollTo('contactSectionRef');
                  handleToggleNaigation();
                "
                >Contact</a
              >
            </li>
          </ul>
        </nav>
      </Transition>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      showMobileNavbar: false,
    };
  },
  methods: {
    emitScrollTo(sectionRef) {
      this.$emit('scrollTo', sectionRef);
    },
    handleToggleNaigation() {
      document.body.style.overflow = document.body.style.overflow === '' ? 'hidden' : '';
      document.body.classList.toggle('navbar--open');
      this.showMobileNavbar = !this.showMobileNavbar;
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
    position: relative;
    z-index: 20;

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

      .hamburger__line {
        stroke: $black;
      }
    }
  }
}

@media (max-width: 639px) {
  .header {
    height: 60px;

    .logo {
      > a {
        font-size: 24px;
        height: 40px;
      }
    }

    .navbar {
      display: none;
    }
  }

  .hamburger__button {
    position: relative;
    z-index: 20;

    svg {
      transition: transform 0.4s;
    }
  }

  .hamburger__line {
    fill: none;
    transition:
      stroke 0.8s,
      stroke-dasharray 0.4s,
      stroke-dashoffset 0.4s;
    stroke: $white;
    stroke-width: 3;
    stroke-linecap: round;

    &--top {
      stroke-dasharray: 40 160;
    }

    &--middle {
      stroke-dasharray: 40 142;
      transform-origin: 50%;
      transition:
        stroke 0.8s,
        transform 0.4s;
    }

    &--bottom {
      stroke-dasharray: 40 85;
      transform-origin: 50%;
      transition:
        stroke 0.8s,
        transform 0.4s,
        stroke-dashoffset 0.4s;
    }
  }

  body.navbar--open {
    .header {
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
    }

    .hamburger__button {
      svg {
        transform: rotate(45deg);
      }
    }

    .hamburger__line {
      stroke: $black;

      &--top {
        stroke-dashoffset: -64px;
      }

      &--middle {
        transform: rotate(90deg);
      }

      &--bottom {
        stroke-dashoffset: -64px;
      }
    }
  }

  .mobile__navbar {
    @include flexbox(flex, center, center);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100dvh;
    background-color: $white;
    z-index: 10;

    ul {
      width: 100%;

      > li {
        text-align: center;
        padding: 12px 24px;

        > a {
          font-size: 28px;
          font-weight: 700;
          color: #212529;
        }
      }
    }
  }
}

.mobile__navbar-enter-active,
.mobile__navbar-leave-active {
  transform: translateY(-100%);
  transition:
    opacity 0.35s cubic-bezier(0.445, 0.05, 0.55, 0.95),
    transform 0.6s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.mobile__navbar-enter-from {
  opacity: 0;
}

.mobile__navbar-enter-to {
  transform: translateY(0);
}

.mobile__navbar-enter-from,
.mobile__navbar-leave-to {
  transition: translateY(-100%);
}
</style>
