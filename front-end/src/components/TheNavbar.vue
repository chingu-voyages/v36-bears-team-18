<template>
  <!-- Navigation -->
  <nav>
    <div class="container">
      <ul class="nav-logo">
        <li>
          <span class="logo">Logo</span>
        </li>
      </ul>
      <ul class="nav-menu">
        <li>
          <a href="/" class="nav-link">Home</a>
        </li>
        <li>
          <a href="/" class="nav-link">Destination</a>
        </li>
        <li>
          <a href="/" class="nav-link">About</a>
        </li>
      </ul>
      <div class="hamburger-menu">
        <input type="checkbox" id="menu-btn-check" />
        <label for="menu-btn-check" class="menu-btn"><span></span></label>
      </div>
      <ul class="nav-account">
        <li>
          <a href="/" class="nav-link">
            <svg
              class="account"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-4.987-3.744A7.966 7.966 0 0 0 12 20c1.97 0 3.773-.712 5.167-1.892A6.979 6.979 0 0 0 12.16 16a6.981 6.981 0 0 0-5.147 2.256zM5.616 16.82A8.975 8.975 0 0 1 12.16 14a8.972 8.972 0 0 1 6.362 2.634 8 8 0 1 0-12.906.187zM12 13a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
              />
            </svg>
          </a>
        </li>
      </ul>
    </div>
    <!-- /container-->
  </nav>
</template>

<script>
  export default {
    name: "TheNavbar",
  };
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-content: center;
    background: rgba(0, 0, 0, 0.7)
  }

  .nav-logo {
    padding: 0;
    margin-left: 10px;
  }

  .menu-btn {
    display: none;
  }

  .nav-menu {
    display: flex;
    li {
      padding: 0 10px;
      a {
        text-decoration: none;
        color: white;
      }
    }
  }

  .nav-account {
    margin-right: 10px;
  }

  .logo {
    color: $orange;
    padding: 0;
  }
  .hamburger-menu {
    display: none;
  }
  #menu-btn-check {
    display: none;
  }

  @media (max-width: 425px) {
    .container {
    }
    .nav-menu {
      display: none;
    }
    .nav-account {
      display: none;
    }
    // hamburger-menu
    .hamburger-menu {
    display: block;
  }
    .menu-btn {
      position: fixed;
      right: 10px;
      display: flex;
      height: 50px;
      width: 50px;
      justify-content: center;
      align-items: center;
      z-index: 90;
    }
    .menu-btn span,
    .menu-btn span:before,
    .menu-btn span:after {
      content: "";
      display: block;
      height: 3px;
      width: 25px;
      border-radius: 3px;
      background-color: #ffffff;
      position: absolute;
    }
    .menu-btn span:before {
      bottom: 8px;
    }
    .menu-btn span:after {
      top: 8px;
    }
    #menu-btn-check:checked ~ .menu-btn span {
      background-color: rgba(255, 255, 255, 0);
    }
    #menu-btn-check:checked ~ .menu-btn span::before {
      bottom: 0;
      transform: rotate(45deg);
    }
    #menu-btn-check:checked ~ .menu-btn span::after {
      top: 0;
      transform: rotate(-45deg);
    }
  }
</style>
