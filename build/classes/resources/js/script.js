//
//	jQuery Validate example script
//
//	Prepared by David Cochran
//
//	Free for your use -- No warranties, no guarantees!
//

$(document).ready(
		function() {

			// Validate
			// http://bassistance.de/jquery-plugins/jquery-plugin-validation/
			// http://docs.jquery.com/Plugins/Validation/
			// http://docs.jquery.com/Plugins/Validation/validate#toptions

			$('#gatepass-form').validate(
					{
						rules : {
							fromOffice : {
								required : true,
								accept:"[a-zA-Z]+"
							},
							fromOfficeDate:{
								required:true
							},
							toOffice:{
								required:true
							},
							toOfficeDate:{
								required:true
							},
							empCode:{
								required:true,
							},
							
							
							
						},
						highlight : function(element) {
							$(element).closest('.control-group').removeClass(
									'success').addClass('error');
						},
						success : function(element) {
							element.text('OK!').addClass('valid').closest(
									'.control-group').removeClass('error')
									.addClass('success');
						}
						
		
						
					});
			
			$('#editgatepass-form').validate(
					{
						rules : {
							fromOffice : {
								required : true,
								accept:"[a-zA-Z]+"
							},
							fromOfficeDate:{
								required:true
							},
							toOffice:{
								required:true
							},
							toOfficeDate:{
								required:true
							},
							empCode:{
								required:true,
							},
							
							
							
						},
						highlight : function(element) {
							$(element).closest('.control-group').removeClass(
									'success').addClass('error');
						},
						success : function(element) {
							element.text('OK!').addClass('valid').closest(
									'.control-group').removeClass('error')
									.addClass('success');
						}
						
		
						
					});
			
			
			$('#employee-form').validate(
					{
						rules : {
							empName : {
								required : true,
								accept:"[a-zA-Z]+"
							},
							empFatherName:{
								required:true,
								accept:"[a-zA-Z]+"
							},
							contactNo:{
								required:true
							},
							personelEmailId:{
								required:true,
								email:true
							},
							department:{
								required:true
							},
							companyEmailId:{
								required:true,
								email:true
							},
							designation:{
								required:true
							},
							permanentAddress:{
								required:true
							},
							
							photo:{
								extension:".jpeg|.png|.jpg"
							}
							
						},
						highlight : function(element) {
							$(element).closest('.control-group').removeClass(
									'success').addClass('error');
						},
						success : function(element) {
							element.text('OK!').addClass('valid').closest(
									'.control-group').removeClass('error')
									.addClass('success');
						}
						
		
						
					});
		
			$('#puchaseorder-form').validate(
					{
						rules : {
							orderDate : {
								required : true,
								
							},
							quotationDate:{
								required:true,
							},
							merchantName:{
								required:true
							},
							contactPersonName:{
								required:true,
							},
							merchantAddress:{
								required:true
							},
							companyAddress:{
								required:true,
							},
							merchantContactNo:{
								required:true
							},
							contactPersonContactNo:{
								required:true
							},
							radio:{
								required:true
							}
							
							
							
							
							
						},
						highlight : function(element) {
							$(element).closest('.control-group').removeClass(
									'success').addClass('error');
						},
						success : function(element) {
							element.text('OK!').addClass('valid').closest(
									'.control-group').removeClass('error')
									.addClass('success');
						}
						
		
						
					});
		
			$('#editpurchaseorder-form').validate(
					{
						rules : {
							orderDate : {
								required : true,
								
							},
							quotationDate:{
								required:true,
							},
							merchantName:{
								required:true
							},
							contactPersonName:{
								required:true,
							},
							merchantAddress:{
								required:true
							},
							companyAddress:{
								required:true,
							},
							merchantContactNo:{
								required:true
							},
							contactPersonContactNo:{
								required:true
							},
							radio:{
								required:true
							}
							
							
							
							
							
						},
						highlight : function(element) {
							$(element).closest('.control-group').removeClass(
									'success').addClass('error');
						},
						success : function(element) {
							element.text('OK!').addClass('valid').closest(
									'.control-group').removeClass('error')
									.addClass('success');
						}
						
		
						
					});
		
			
			$('#assets-form').validate(
					{
						rules : {
							signday : {
								required : true,
								accept:"[a-zA-Z]+"
								
							},
							aggrementdate:{
								required:true,
							},
							empCode:{
								required:true
							},
							signlocation:{
								required:true,
								accept:"[a-zA-Z]+"
							},
							acceptedDate:{
								required:true
								
							},
							hod:{
								required:true,
								accept:"[a-zA-Z]+"
							},
							department:{
								required:true,
								accept:"[a-zA-Z]+"
							} 
						},
						highlight : function(element) {
							$(element).closest('.control-group').removeClass(
									'success').addClass('error');
						},
						success : function(element) {
							element.text('OK!').addClass('valid').closest(
									'.control-group').removeClass('error')
									.addClass('success');
						}
						
		
						
					});
		
		
			$('#editassets-form').validate(
					{
						rules : {
							signday : {
								required : true,
								accept:"[a-zA-Z]+"
								
							},
							aggrementdate:{
								required:true,
							},
							empCode:{
								required:true
							},
							signlocation:{
								required:true,
								accept:"[a-zA-Z]+"
							},
							acceptedDate:{
								required:true
								
							},
							hod:{
								required:true,
								accept:"[a-zA-Z]+"
							},
							department:{
								required:true,
								accept:"[a-zA-Z]+"
							} 
							
							
						},
						highlight : function(element) {
							$(element).closest('.control-group').removeClass(
									'success').addClass('error');
						},
						success : function(element) {
							element.text('OK!').addClass('valid').closest(
									'.control-group').removeClass('error')
									.addClass('success');
						}
						
		
						
					});
		
			$('#clearance-form').validate(
					{
						rules : {
							empCode : {
								required : true,
							} 
							
						},
						highlight : function(element) {
							$(element).closest('.control-group').removeClass(
									'success').addClass('error');
						},
						success : function(element) {
							element.text('OK!').addClass('valid').closest(
									'.control-group').removeClass('error')
									.addClass('success');
						}
						
		
						
					});
		
		/*	
			
			$('#addstudent-form').validate(
					{
						rules : {
							name : {
								minlength : 2,
								required : true
							},

							dob : {
								required : true
								
							},
							gender : {
								required : true
							},
							religion: {
								required : true
							},
							bloodGroup: {
								required : true
							},
							address: {
								required : true
							},
							phone: {
								minlength:10,
							    maxlength:10,
							    required : true
							},
							email : {
								required : true,
								email : true
							},
							fatherName: {
								required : true
							},
							motherName: {
								required : true
							},
							relation: {
								required : true
							},
							contactNo:{
								minlength:10,
							    maxlength:10,
							    required : true
							},
							emailId:
								{
								required : true,
								email : true
								},
				
								parentAddress: {
									required : true
								},
								parentOccupation: {
									required : true
								},
								guardian: {
									required : true
								},
								classId: {
									required : true
								},
							
							
						},
						highlight : function(element) {
							$(element).closest('.control-group').removeClass(
									'success').addClass('error');
						},
						success : function(element) {
							element.text('OK!').addClass('valid').closest(
									'.control-group').removeClass('error')
									.addClass('success');
						}
						
		
						
					});

*/					});





// end document.ready
