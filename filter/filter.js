function gray(a){for(var t=0;t<a.width;t++)for(var d=0;d<a.height;d++){var r=4*(t+d*a.width),h=a.data[r+0],i=a.data[r+1],o=a.data[r+2],n=.299*h+.587*i+.114*o;a.data[r+0]=n,a.data[r+1]=n,a.data[r+2]=n,a.data[r+3]=255}return a}function old(a){for(var t=0;t<a.width;t++)for(var d=0;d<a.height;d++){var r=4*(t+d*a.width),h=a.data[r+0],i=a.data[r+1],o=a.data[r+2],n=.393*h+.769*i+.189*o,f=.349*h+.686*i+.168*o,e=.272*h+.534*i+.131*o,v=.5*Math.random()+.5,u=v*n+(1-v)*h;v=.5*Math.random()+.5;var g=v*f+(1-v)*i;v=.5*Math.random()+.5;var w=v*e+(1-v)*o;a.data[r+0]=u,a.data[r+1]=g,a.data[r+2]=w,a.data[r+3]=255}return a}function negatives(a){for(var t=0;t<a.width;t++)for(var d=0;d<a.height;d++){var r=4*(t+d*a.width),h=a.data[r+0],i=a.data[r+1],o=a.data[r+2],n=255-h,f=255-i,e=255-o;a.data[r+0]=n,a.data[r+1]=f,a.data[r+2]=e,a.data[r+3]=255}return a}function black(a){for(var t=0;t<a.width;t++)for(var d=0;d<a.height;d++){var r=4*(t+d*a.width),h=a.data[r+0],i=a.data[r+1],o=a.data[r+2];h+i+o>=300?fr=fg=fb=255:fr=fg=fb=0,a.data[r+0]=fr,a.data[r+1]=fg,a.data[r+2]=fb,a.data[r+3]=255}return a}function cameo(a){for(var t=0;t<a.width;t++)for(var d=0;d<a.height;d++){var r=4*(t+d*a.width),h=a.data[r+0],i=a.data[r+1],o=a.data[r+2],n=4*(t+(d+1)*a.width),f=a.data[n+0],e=a.data[n+1],v=a.data[n+2],u=f-h+128,g=e-i+128,w=v-o+128,c=.299*u+.587*g+.114*w;a.data[r+0]=c,a.data[r+1]=c,a.data[r+2]=c,a.data[r+3]=255}return a}function comic(a){for(var t=0;t<a.width;t++)for(var d=0;d<a.height;d++){var r=4*(t+d*a.width),h=a.data[r+0],i=a.data[r+1],o=a.data[r+2],n=Math.abs(i-h+i+o)*h/256,f=Math.abs(o-h+i+o)*h/256,e=Math.abs(o-h+i+o)*i/256;a.data[r+0]=n,a.data[r+1]=f,a.data[r+2]=e,a.data[r+3]=255}return a}function casting(a){for(var t=0;t<a.width;t++)for(var d=0;d<a.height;d++){var r=4*(t+d*a.width),h=a.data[r+0],i=a.data[r+1],o=a.data[r+2],n=128*h/(i+o+1),f=128*i/(h+o+1),e=128*o/(i+h+1);a.data[r+0]=n,a.data[r+1]=f,a.data[r+2]=e,a.data[r+3]=255}return a}function frozen(a){for(var t=0;t<a.width;t++)for(var d=0;d<a.height;d++){var r=4*(t+d*a.width),h=a.data[r+0],i=a.data[r+1],o=a.data[r+2],n=3*(h-i-o)/2,f=3*(i-h-o)/2,e=3*(o-i-h)/2;a.data[r+0]=n,a.data[r+1]=f,a.data[r+2]=e,a.data[r+3]=255}return a}function spread(a){for(var t=0;t<a.width;t++)for(var d=0;d<a.height;d++){var r=4*(t+d*a.width),h=(a.data[r+0],a.data[r+1],a.data[r+2],Math.floor(10*Math.random())%3),i=4*(t+h+(d+h)*a.width),o=a.data[i+0],n=a.data[i+1],f=a.data[i+2],e=o,v=n,u=f;a.data[r+0]=e,a.data[r+1]=v,a.data[r+2]=u,a.data[r+3]=255}return a}function discolor(a){for(var t,d=0,r=a.length;d<r;d+=4)t=.299*a[d]+.587*a[d+1]+.114*a[d+2],a[d]=a[d+1]=a[d+2]=t;return a}function invert(a){for(var t=0,d=a.length;t<d;t+=4)a[t]=255-a[t],a[t+1]=255-a[t+1],a[t+2]=255-a[t+2];return a}function dodgeColor(a,t){for(var d=0,r=a.length;d<r;d+=4)a[d]=a[d]+a[d]*t[d]/(255-t[d]),a[d+1]=a[d+1]+a[d+1]*t[d+1]/(255-t[d+1]),a[d+2]=a[d+2]+a[d+2]*t[d+2]/(255-t[d+2]);return a}function gaussBlur(a,t,d,r,h){var i,o,n,f,e,v,u,g,w,c,s=[],l=0;for(r=Math.floor(r)||3,h=h||r/3,v=1/(Math.sqrt(2*Math.PI)*h),e=-1/(2*h*h),u=0,i=-r;i<=r;i++,u++)f=v*Math.exp(e*i*i),s[u]=f,l+=f;for(u=0,c=s.length;u<c;u++)s[u]/=l;for(o=0;o<d;o++)for(i=0;i<t;i++){for(n=f=e=v=0,l=0,g=-r;g<=r;g++)w=i+g,w>=0&&w<t&&(u=4*(o*t+w),n+=a[u]*s[g+r],f+=a[u+1]*s[g+r],e+=a[u+2]*s[g+r],l+=s[g+r]);u=4*(o*t+i),a[u]=n/l,a[u+1]=f/l,a[u+2]=e/l}for(i=0;i<t;i++)for(o=0;o<d;o++){for(n=f=e=v=0,l=0,g=-r;g<=r;g++)w=o+g,w>=0&&w<d&&(u=4*(w*t+i),n+=a[u]*s[g+r],f+=a[u+1]*s[g+r],e+=a[u+2]*s[g+r],l+=s[g+r]);u=4*(o*t+i),a[u]=n/l,a[u+1]=f/l,a[u+2]=e/l}return a}function sketch(a,t,d){var r,h=document.createElement("canvas"),i=h.getContext("2d"),o=a.data,n=a.width,f=a.height;return discolor(o),h.width=n,h.height=f,i.clearRect(0,0,n,f),i.putImageData(a,0,0),r=i.getImageData(0,0,n,f).data,invert(r),gaussBlur(r,n,f,t,d),dodgeColor(o,r),a.data=o,a}function bright(a){var t=.25,d=0,r=255*t,h=1+d;h*=h;for(var i=32768*h+1,o=0;o<a.width;o++)for(var n=0;n<a.height;n++){var f=4*(o+n*a.width),e=a.data[f+0],v=a.data[f+1],u=a.data[f+2];if(0!=r){var g=e+r,w=v+r,c=u+r;e=g>255?255:g<0?0:g,v=w>255?255:w<0?0:w,u=c>255?255:c<0?0:c}if(32769!=i){var g=e-128,w=v-128,c=u-128;g=g*i>>15,w=w*i>>15,c=c*i>>15,g+=128,w+=128,c+=128,e=g>255?255:g<0?0:g,v=w>255?255:w<0?0:w,u=c>255?255:c<0?0:c}a.data[f+0]=e,a.data[f+1]=v,a.data[f+2]=u,a.data[f+3]=255}return a}function softglow(a){var t=a.data,d=a.width,r=a.height;gaussBlur(t,d,r),a.data=t,a=bright(a);for(var h=0;h<a.width;h++)for(var i=0;i<a.height;i++){var o=4*(h+i*a.width),n=a.data[o+0],f=a.data[o+1],e=a.data[o+2];a.data[o+0]=n,a.data[o+1]=f,a.data[o+2]=e,a.data[o+3]=255}return a}function opacity(a){for(var t=gaussBlur(a.data,a.width,a.height),d=0;d<a.width;d++)for(var r=0;r<a.height;r++){var h=4*(d+r*a.width),i=a.data[h+0],o=a.data[h+1],n=a.data[h+2],f=t[h+0],e=t[h+1],v=t[h+2],u=200,g=(256-u)*i+u*f>>8,w=(256-u)*o+u*e>>8,c=(256-u)*n+u*v>>8;a.data[h+0]=g,a.data[h+1]=w,a.data[h+2]=c,a.data[h+3]=255}return a}function gausian(a){for(var t=0;t<a.width;t++)for(var d=0;d<a.height;d++){var r=4*(t-1+(d-1)*a.width),h=a.data[r+0],i=a.data[r+1],o=a.data[r+2],n=4*(t-1+d*a.width),f=a.data[n+0],e=a.data[n+1],v=a.data[n+2],u=4*(t-1+(d+1)*a.width),g=a.data[u+0],w=a.data[u+1],c=a.data[u+2],s=4*(t+(d-1)*a.width),l=(a.data[s+0],a.data[s+1],a.data[s+2],4*(t+d*a.width)),M=a.data[l+0],m=a.data[l+1],b=a.data[l+2],p=4*(t+(d+1)*a.width),B=a.data[p+0],C=a.data[p+1],I=a.data[p+2],k=4*(t+1+(d-1)*a.width),x=a.data[k+0],y=a.data[k+1],D=a.data[k+2],q=4*(t+1+d*a.width),z=a.data[q+0],E=a.data[q+1],P=a.data[q+2],R=4*(t+1+(d+1)*a.width),j=a.data[R+0],A=a.data[R+1],F=a.data[R+2],G=(h+2*f+g+2*g+4*M+2*B+x+2*z+j)/16,H=(i+2*e+w+2*w+4*m+2*C+y+2*E+A)/16,J=(o+2*v+c+2*c+4*b+2*I+D+2*P+F)/16;a.data[r+0]=G,a.data[r+1]=H,a.data[r+2]=J,a.data[r+3]=255}return a}