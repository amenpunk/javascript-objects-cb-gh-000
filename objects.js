var playlist = {
     deadmua5:'faxing berlin',
     apextwin:'alberto balsam'
}

function updatePlaylist(list,artistName,songTitle){
     return Object.assign(list, { [artistName]: songTitle })
}

function removeFromPlaylist(playlist,artistName){
   delete playlist.artistName
  return playlist.artistName
}
