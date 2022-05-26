module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    
      colors:{
        logoColor: "#4D4D97",
        backgroundColor: '#F3F6F6',
        headingColor:'#181818',
        
      },
      backgroundImage:{
        'boxThree':"linear-gradient(179.97deg, rgba(0, 0, 0, 0) 0.03%, #000000 99.97%),url('~assets/photo1.jpeg')",
        'boxOne': "linear-gradient(179.97deg, rgba(0, 0, 0, 0) 0.03%, #000000 99.97%),url('~assets/photo2.jpeg')",
        'boxTwo': "linear-gradient(179.97deg, rgba(0, 0, 0, 0) 0.03%, #000000 99.97%),url('~assets/phot3.jpeg')",
        'nftCard':"url('~assets/Profile_NFT.png')",
      }
 
  },
  plugins: [],
}
}