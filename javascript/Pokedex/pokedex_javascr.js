$(document).ready(function()
{
	loadingimg();

	function loadingimg()
	{
		var pokemonimage;

		for (var i = 1; i <= 151; i++)
		{
			pokemonimage = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + i + ".png";
			pokemonimage = "<img id = "+ i + " src = " + pokemonimage + ">";
		 	$("#pokemon").append(pokemonimage);
	 	};
	};



	$("img").click(function()
	{	
		var poke_id = $(this).attr("id");
		pokemon_url = "https://pokeapi.co/api/v2/pokemon/" + poke_id + "/";
				
		$.get(pokemon_url, function(res) 
		{
			var pokemonimage;
			pokemonimage = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + poke_id + ".png";
			
			//console.log(res);
			var pokemon_set = "";
			pokemon_set = "<h2>" + res.name + "</h2>"; 
			pokemon_set += "<img id = 'pokedex_img' src = " + pokemonimage + ">";
			pokemon_set += "<p>Types</p><ul>";

			for (var i = 0; i < (res.types.length); i++)
			{
				pokemon_set += "<li>" + res.types[i].type.name + "</li>";
			}

			pokemon_set  += "</ul>";
			pokemon_set += "<p>Height</p><p>" + res.height + "</p>";
			pokemon_set += "<p>Height</p><p>" + res.weight + "</p>";
	    $("#pokedex").html(pokemon_set);
		}, "json");

	});
});

