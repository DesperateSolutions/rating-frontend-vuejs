<template>
  <v-container>
    <v-form ref="addGame" class="elevation-24">
      <v-card>
        <v-container>
          <v-card-title>
            <h3 class="headline mb-0">
              Legg til spill
            </h3>
          </v-card-title>
          <v-row>
            <v-col lg="6" md="6">
              <select-player v-model="playerone" :items="players" label="Player One" />
            </v-col>
            <v-col lg="6" md="6">
              <select-player v-model="playertwo" :items="players" label="Player Two" />
            </v-col>
          </v-row>
          <v-row>
            <v-col lg="6" md="6">
              <v-text-field v-model="whiteValue" label="Player 1 score:" :mask="whiteMask" type="tel" />
            </v-col>
            <v-col lg="6" md="6">
              <v-text-field v-model="blackValue" label="Player 2 score:" :mask="blackMask" type="tel" />
            </v-col>
          </v-row>
          <v-row>
            <v-col lg="6" md="6">
              <v-checkbox v-model="checkbox" :label="`Spesifiser dato og tidspunkt`" />
            </v-col>
          </v-row>
          <v-row v-if="checkbox">
            <v-col lg="6" md="6">
              <v-menu
                v-model="datemenu"
                :close-on-content-click="true"
                :nudge-right="40"
                lazy
                transition="scale-transition"
                offset-y
                full-width
                min-width="290px"
              >
                <v-text-field slot="activator" v-model="date" label="Velg dato" prepend-icon="event" readonly />
                <v-date-picker v-model="date" @input="datemenu = false" />
              </v-menu>
            </v-col>
            <v-col lg="6" md="6">
              <v-menu
                ref="menu"
                v-model="timemenu"
                :close-on-content-click="false"
                :nudge-right="40"
                :return-value.sync="time"
                lazy
                transition="scale-transition"
                offset-y
                full-width
                max-width="290px"
                min-width="290px"
              >
                <v-text-field
                  slot="activator"
                  v-model="time"
                  label="Velg tidspunkt"
                  prepend-icon="access_time"
                  readonly
                />
                <v-time-picker
                  v-if="timemenu"
                  v-model="time"
                  full-width
                  format="24hr"
                  @change="$refs.menu.save(time)"
                />
              </v-menu>
            </v-col>
          </v-row>
          <v-card-actions>
            <v-btn slot="activator" @click="clear">
              Reset
            </v-btn>
            <v-spacer />
            <v-btn @click="submit">
              Legg til spill
            </v-btn>
          </v-card-actions>
        </v-container>
      </v-card>
    </v-form>
  </v-container>
</template>

<script>
import moment from 'moment';
import { mapState } from 'vuex';
import SelectPlayer from './SelectPlayer.vue';
import { isObjectEmpty } from '../util/helpers';

moment.locale('nb');

export default {
  name: 'AddGame',
  components: {
    'select-player': SelectPlayer,
  },
  data: () => ({
    whiteMask: '##',
    blackMask: '##',
    whiteValue: '',
    blackValue: '',
    playerone: '',
    playertwo: '',
    date: new Date().toISOString().substr(0, 10),
    datemenu: false,
    time: moment().format('LT'),
    timemenu: false,
    checkbox: false,
  }),
  computed: mapState(['players', 'selectedLeague']),
  async created() {
    if (isObjectEmpty(this.$store.state.selectedLeague)) {
      await this.$store.dispatch('GET_ALL_LEAGUES').then(() => {
        const league = this.$store.state.leagues.find(item => item.name === this.$route.params.name);
        this.$store.dispatch('GET_ALL_PLAYERS', { league: league.id });
        this.$store.dispatch('SELECT_LEAGUE', { selectedLeague: league });
      });
    }
    this.$store.dispatch('GET_ALL_PLAYERS', { league: this.$store.state.selectedLeague.id });
  },
  methods: {
    submit() {
      this.$store.dispatch('ADD_A_GAME', {
        league: this.$store.state.selectedLeague.id,
        whiteId: this.playerone,
        blackId: this.playertwo,
        result: `${this.whiteValue}-${this.blackValue}`,
        date: moment(new Date(`${this.date} ${this.time}`)).format(),
      });
      this.$refs.addGame.reset();
    },
    clear() {
      this.$refs.addGame.reset();
    },
  },
};
</script>

<style scoped></style>
