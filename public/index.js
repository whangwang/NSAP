var nba = [
  {
    "team": "Boston Celtics",
    "logo": "https://stats.nba.com/media/img/teams/logos/BOS_logo.svg",
    "team_id": "1610612738",
    "player": []
  },{
    "team": "Brooklyn Nets",
    "logo": "https://stats.nba.com/media/img/teams/logos/BKN_logo.svg",
    "team_id": "1610612751",
    "player": []
  },{
    "team": "New York Knicks",
    "logo": "https://stats.nba.com/media/img/teams/logos/NYK_logo.svg",
    "team_id": "1610612752",
    "player": []
  },{
    "team": "Philadelphia 76ers",
    "logo": "https://stats.nba.com/media/img/teams/logos/PHI_logo.svg",
    "team_id": "1610612755",
    "player": []
  },{
    "team": "Toronto Raptors",
    "logo": "https://stats.nba.com/media/img/teams/logos/TOR_logo.svg",
    "team_id": "1610612761",
    "player": []
  },{
    "team": "Chicago Bulls",
    "logo": "https://stats.nba.com/media/img/teams/logos/CHI_logo.svg",
    "team_id": "1610612741",
    "player": []
  },{
    "team": "Cleveland Cavaliers",
    "logo": "https://stats.nba.com/media/img/teams/logos/CLE_logo.svg",
    "team_id": "1610612739",
    "player": []
  },{
    "team": "Detroit Pistonss",
    "logo": "https://stats.nba.com/media/img/teams/logos/DET_logo.svg",
    "team_id": "1610612765",
    "player": []
  },{
    "team": "Indiana Pacers",
    "logo": "https://stats.nba.com/media/img/teams/logos/IND_logo.svg",
    "team_id": "1610612754",
    "player": []
  },{
    "team": "Milwaukee Bucks",
    "logo": "https://stats.nba.com/media/img/teams/logos/MIL_logo.svg",
    "team_id": "1610612749",
    "player": []
  },{
    "team": "Atlanta Hawks",
    "logo": "https://stats.nba.com/media/img/teams/logos/ATL_logo.svg",
    "team_id": "1610612737",
    "player": []
  },{
    "team": "Charlotte Hornets",
    "logo": "https://stats.nba.com/media/img/teams/logos/CHA_logo.svg",
    "team_id": "1610612766",
    "player": []
  },{
    "team": "Miami Heat",
    "logo": "https://stats.nba.com/media/img/teams/logos/MIA_logo.svg",
    "team_id": "1610612748",
    "player": []
  },{
    "team": "Orlando Magic",
    "logo": "https://stats.nba.com/media/img/teams/logos/ORL_logo.svg",
    "team_id": "1610612753",
    "player": []
  },{
    "team": "Washington Wizards",
    "logo": "https://stats.nba.com/media/img/teams/logos/WAS_logo.svg",
    "team_id": "1610612764",
    "player": []
  },{
    "team": "Denver Nuggets",
    "logo": "https://stats.nba.com/media/img/teams/logos/DEN_logo.svg",
    "team_id": "1610612743",
    "player": []
  },{
    "team": "Minnesota Timberwolves",
    "logo": "https://stats.nba.com/media/img/teams/logos/MIN_logo.svg",
    "team_id": "1610612750",
    "player": []
  },{
    "team": "Oklahoma City Thunder",
    "logo": "https://stats.nba.com/media/img/teams/logos/OKC_logo.svg",
    "team_id": "1610612760",
    "player": []
  },{
    "team": "Portland Trail Blazers",
    "logo": "https://stats.nba.com/media/img/teams/logos/POR_logo.svg",
    "team_id": "1610612757",
    "player": []
  },{
    "team": "Utah Jazz",
    "logo": "https://stats.nba.com/media/img/teams/logos/UTA_logo.svg",
    "team_id": "1610612762",
    "player": []
  },{
    "team": "Golden State Warriors",
    "logo": "https://stats.nba.com/media/img/teams/logos/GSW_logo.svg",
    "team_id": "1610612744",
    "player": []
  },{
    "team": "LA Clippers",
    "logo": "https://stats.nba.com/media/img/teams/logos/LAC_logo.svg",
    "team_id": "1610612746",
    "player": []
  },{
    "team": "Los Angeles Lakers",
    "logo": "https://stats.nba.com/media/img/teams/logos/LAL_logo.svg",
    "team_id": "1610612747",
    "player": []
  },{
    "team": "Phoenix Suns",
    "logo": "https://stats.nba.com/media/img/teams/logos/PHX_logo.svg",
    "team_id": "1610612756",
    "player": []
  },{
    "team": "Sacramento Kings",
    "logo": "https://stats.nba.com/media/img/teams/logos/SAC_logo.svg",
    "team_id": "1610612758",
    "player": []
  },{
    "team": "Dallas Mavericks",
    "logo": "https://stats.nba.com/media/img/teams/logos/DAL_logo.svg",
    "team_id": "1610612742",
    "player": []
  },{
    "team": "Houston Rockets",
    "logo": "https://stats.nba.com/media/img/teams/logos/HOU_logo.svg",
    "team_id": "1610612745",
    "player": []
  },{
    "team": "Memphis Grizzlies",
    "logo": "https://stats.nba.com/media/img/teams/logos/MEM_logo.svg",
    "team_id": "1610612763",
    "player": []
  },{
    "team": "New Orleans Pelicans",
    "logo": "https://stats.nba.com/media/img/teams/logos/NOP_logo.svg",
    "team_id": "1610612740",
    "player": []
  },{
    "team": "San Antonio Spurs",
    "logo": "https://stats.nba.com/media/img/teams/logos/SAS_logo.svg",
    "team_id": "1610612759",
    "player": []
  }
]
$(document).ready(function(){
  $('.team_title').text(nba[0].team);
  $('.team_logo').attr('src',nba[0].logo);
  $('body').on('click','.menu-control',function(){
    var now=parseInt($(this).attr('next-id'));
    $('.team_title').text(nba[now].team);
    $('.team_logo').attr('src',nba[now].logo);
    $('.team_logo').attr('tid',now);
    var prev=now-1;
    var next=now+1;
    if(next>29)next=0;
    if(prev<0)prev=29;
    $('.menu-control.glyphicon-menu-left').attr('next-id',prev);
    $('.menu-control.glyphicon-menu-right').attr('next-id',next);
  });
  document.body.addEventListener('keydown', function(e){
    if(e.which==39){
      var now=parseInt($('.menu-control.glyphicon-menu-right').attr('next-id'));
      $('.team_title').text(nba[now].team);
      $('.team_logo').attr('src',nba[now].logo);
      $('.team_logo').attr('tid',now);
      var prev=now-1;
      var next=now+1;
      if(next>29)next=0;
      if(prev<0)prev=29;
      $('.menu-control.glyphicon-menu-left').attr('next-id',prev);
      $('.menu-control.glyphicon-menu-right').attr('next-id',next);
    }else if(e.which==37){
      var now=parseInt($('.menu-control.glyphicon-menu-left').attr('next-id'));
      $('.team_title').text(nba[now].team);
      $('.team_logo').attr('src',nba[now].logo);
      $('.team_logo').attr('tid',now);
      var prev=now-1;
      var next=now+1;
      if(next>29)next=0;
      if(prev<0)prev=29;
      $('.menu-control.glyphicon-menu-left').attr('next-id',prev);
      $('.menu-control.glyphicon-menu-right').attr('next-id',next);
    }
  });
});
