var playlist = {
     deadmua5:'faxing berlin',
     apextwin:'alberto balsam'
}

function removeFromPlaylist(playlist,artistName){
   delete playlist.artistName
}

function updatePlaylist(list,artistName,songTitle){
     return Object.assign(list, { [artistName]: songTitle })
}

