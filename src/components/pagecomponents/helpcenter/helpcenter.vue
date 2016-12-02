<script>
    import './helpcenter.scss'
    export default{
      ready(){

      },
      data(){
        return{

          oeko:require('./resources/bio.png'),
          bsci:require('./resources/bsci.png'),
          ce:require('./resources/ce.png'),
          fc:require('./resources/fc.png'),
          fda:require('./resources/fda.png'),
          fs:require('./resources/fs.png'),
          fsc:require('./resources/fsc.png'),
          iso:require('./resources/iso.png'),
          sa:require('./resources/sa.png'),
          sgs:require('./resources/sgs.png'),
          ul:require('./resources/ul.png'),
          upc:require('./resources/upc.png')


        }
      },
      methods:{
        showHelpCtn:function(e){

          $(e.currentTarget).find('.help_ctn').stop(true,false).slideDown();
        },
        hideHelpCtn:function(e){

          $(e.currentTarget).find('.help_ctn').stop(true,false).slideUp();
        }
      },
      components:{
      },
      template:require('./helpcenter.html')
    }
</script>
