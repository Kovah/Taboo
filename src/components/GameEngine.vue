<script>
  export default {
    name: 'GameEngine',
    data () {
      return {
        playerReady: false,
        categoryReady: false,
        gameReady: false
      };
    },
    methods: {
      playerNameEntered: function () {
        this.playerReady = true;
        console.log('Player is ready.');
      },
      playerNameMissing: function () {
        this.playerReady = false;
        console.log('Player is not ready.');
      }
    }
  };
</script>
