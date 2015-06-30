$( document ).ready(function() {

	/* Sidebar height set */
	$('.sidebar').css('min-height',$(document).height());

	/* Secondary contact links */
	var scontacts = $('#contact-list-secondary');
	var contact_list = $('#contact-list');
	
	scontacts.hide();
	
	contact_list.mouseenter(function(){ scontacts.fadeIn(); });
	
	contact_list.mouseleave(function(){ scontacts.fadeOut(); });

	var $container = $('#listEl');
	$(document.location.hash).click()
// initialize
$container.masonry({
  itemSelector: 'ul>li'
});

// Calculate md5sum hash for gravatar 

$("img[gravatar-mail]").each(function()
							{
								var hash_mail=window.md5($(this).attr('gravatar-mail'))
								console.log("hash_md5 : "+$(this).attr('gravatar-mail'));
								
								$(this).attr("src","//www.gravatar.com/avatar/"+hash_mail+"?s=135");
							})

});
