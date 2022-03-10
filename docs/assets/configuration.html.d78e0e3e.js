import{r as l,o as t,c,a as n,d as e,F as r,b as s,e as p}from"./app.0c7793af.js";import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";const i={},u=n("h1",{id:"\u5E38\u7528\u914D\u7F6E",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5E38\u7528\u914D\u7F6E","aria-hidden":"true"},"#"),s(" \u5E38\u7528\u914D\u7F6E")],-1),m=n("p",null,"\u5E38\u7528\u914D\u7F6E",-1),b=n("h2",{id:"software-collections",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#software-collections","aria-hidden":"true"},"#"),s(" software collections")],-1),k=s("devtools-7 "),d={href:"https://www.softwarecollections.org",target:"_blank",rel:"noopener noreferrer"},h=s("\u7F51\u7AD9"),g=p(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 1. Install a package with repository for your system:</span>
<span class="token comment"># On CentOS, install package centos-release-scl available in CentOS repository:</span>
$ <span class="token function">sudo</span> yum <span class="token function">install</span> centos-release-scl

<span class="token comment"># On RHEL, enable RHSCL repository for you system:</span>
$ <span class="token function">sudo</span> yum-config-manager --enable rhel-server-rhscl-7-rpms

<span class="token comment"># 2. Install the collection:</span>
$ <span class="token function">sudo</span> yum <span class="token function">install</span> devtoolset-7

<span class="token comment"># 3. Start using software collections:</span>
$ scl <span class="token builtin class-name">enable</span> devtoolset-7 <span class="token function">bash</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="sudo" tabindex="-1"><a class="header-anchor" href="#sudo" aria-hidden="true">#</a> sudo</h2><blockquote><p>\u514D\u8F93\u5BC6\u7801 /etc/sudoers.d/sudoers battery ALL=(ALL) NOPASSWD : ALL</p></blockquote><h2 id="\u81EA\u7B7E\u540D\u8BC1\u4E66" tabindex="-1"><a class="header-anchor" href="#\u81EA\u7B7E\u540D\u8BC1\u4E66" aria-hidden="true">#</a> \u81EA\u7B7E\u540D\u8BC1\u4E66</h2>`,4),v={href:"https://www.cnblogs.com/hnxxcxg/p/7610582.html",target:"_blank",rel:"noopener noreferrer"},f=s("\u539F\u6587"),x=p(`<p>X.509 \u8BC1\u4E66\u5305\u542B\u4E09\u4E2A\u6587\u4EF6\uFF1Akey\uFF0Ccsr\uFF0Ccrt</p><ul><li>key \u662F\u670D\u52A1\u5668\u4E0A\u7684\u79C1\u94A5\u6587\u4EF6\uFF0C\u7528\u4E8E\u5BF9\u53D1\u9001\u7ED9\u5BA2\u6237\u7AEF\u6570\u636E\u7684\u52A0\u5BC6\uFF0C\u4EE5\u53CA\u5BF9\u4ECE\u5BA2\u6237\u7AEF\u63A5\u6536\u5230\u6570\u636E\u7684\u89E3\u5BC6</li><li>csr \u662F\u8BC1\u4E66\u7B7E\u540D\u8BF7\u6C42\u6587\u4EF6\uFF0C\u7528\u4E8E\u63D0\u4EA4\u7ED9\u8BC1\u4E66\u9881\u53D1\u673A\u6784\uFF08CA\uFF09\u5BF9\u8BC1\u4E66\u7B7E\u540D</li><li>crt \u662F\u7531\u8BC1\u4E66\u9881\u53D1\u673A\u6784\uFF08CA\uFF09\u7B7E\u540D\u540E\u7684\u8BC1\u4E66\uFF0C\u6216\u8005\u662F\u5F00\u53D1\u8005\u81EA\u7B7E\u540D\u7684\u8BC1\u4E66\uFF0C\u5305\u542B\u8BC1\u4E66\u6301\u6709\u4EBA\u7684\u4FE1\u606F\uFF0C\u6301\u6709\u4EBA\u7684\u516C\u94A5\uFF0C\u4EE5\u53CA\u7B7E\u7F72\u8005\u7684\u7B7E\u540D\u7B49\u4FE1\u606F</li></ul><blockquote><p>\u5907\u6CE8\uFF1A\u5728\u5BC6\u7801\u5B66\u4E2D\uFF0CX.509 \u662F\u4E00\u4E2A\u6807\u51C6\uFF0C\u89C4\u8303\u4E86\u516C\u5F00\u79D8\u94A5\u8BA4\u8BC1\u3001\u8BC1\u4E66\u540A\u9500\u5217\u8868\u3001\u6388\u6743\u51ED\u8BC1\u3001\u51ED\u8BC1\u8DEF\u5F84\u9A8C\u8BC1\u7B97\u6CD5\u7B49</p></blockquote><h3 id="\u751F\u6210\u79C1\u94A5" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210\u79C1\u94A5" aria-hidden="true">#</a> \u751F\u6210\u79C1\u94A5</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> openssl genrsa -des3 -out private.key <span class="token number">2048</span>
 <span class="token comment"># des|-des3|-idea</span>
<span class="token comment"># \u9ED8\u8BA41024\u4F4D \u6700\u597D2048\u4EE5\u4E0A</span>
<span class="token comment">#-des            encrypt the generated key with DES in cbc mode</span>
<span class="token comment"># -des3           encrypt the generated key with DES in ede cbc mode (168 bit key)</span>
<span class="token comment"># -idea           encrypt the generated key with IDEA in cbc mode</span>
<span class="token comment"># -seed</span>
<span class="token comment">#                 encrypt PEM output with cbc seed</span>
<span class="token comment"># -aes128, -aes192, -aes256</span>
<span class="token comment">#                 encrypt PEM output with cbc aes</span>
<span class="token comment"># -camellia128, -camellia192, -camellia256</span>
<span class="token comment">#                 encrypt PEM output with cbc camellia</span>
<span class="token comment"># -out file       output the key to &#39;file</span>
<span class="token comment"># -passout arg    output file pass phrase source</span>
<span class="token comment"># -f4             use F4 (0x10001) for the E value</span>
<span class="token comment"># -3              use 3 for the E value</span>
<span class="token comment"># -engine e       use engine e, possibly a hardware device.</span>
<span class="token comment"># -rand file:file:...</span>
<span class="token comment">#                 load the file (or the files in the directory) into</span>
<span class="token comment">#                 the random number generator</span>
<span class="token comment">#</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="\u751F\u6210-csr-\u8BC1\u4E66\u7B7E\u540D\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210-csr-\u8BC1\u4E66\u7B7E\u540D\u8BF7\u6C42" aria-hidden="true">#</a> \u751F\u6210 CSR\uFF08\u8BC1\u4E66\u7B7E\u540D\u8BF7\u6C42\uFF09</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> openssl req -new -key private.key -out server.csr -config openssl.cfg
 <span class="token comment"># config\u9ED8\u8BA4--/etc/ssl/openssl.cnf</span>
<span class="token comment">#  [new/x509]</span>
<span class="token comment">#</span>
<span class="token comment"># \u5F53\u4F7F\u7528-new\u9009\u53D6\u7684\u65F6\u5019\uFF0C\u8BF4\u660E\u662F\u8981\u751F\u6210\u8BC1\u4E66\u8BF7\u6C42\uFF0C\u5F53\u4F7F\u7528x509\u9009\u9879\u7684\u65F6\u5019\uFF0C\u8BF4\u660E\u662F\u8981\u751F\u6210\u81EA\u7B7E\u540D\u8BC1\u4E66</span>
<span class="token comment">#</span>
<span class="token comment"># [/key/newkey/keyout]</span>
<span class="token comment">#</span>
<span class="token comment"># key\u548Cnewkey\u662F\u4E92\u65A5\u7684\uFF0Ckey\u662F\u6307\u5B9A\u5DF2\u6709\u7684\u5BC6\u94A5\u6587\u4EF6\uFF0C\u800Cnewkey\u662F\u6307\u5728\u751F\u6210\u8BC1\u4E66\u8BF7\u6C42\u6216\u8005\u81EA\u7B7E\u540D\u8BC1\u4E66\u7684\u65F6\u5019\u81EA\u52A8\u751F\u6210\u5BC6\u94A5\uFF0C\u7136\u540E\u751F\u6210\u7684\u5BC6\u94A5\u540D\u79F0\u6709keyout\u53C2\u6570\u6307\u5B9A\u3002</span>
<span class="token comment">#</span>
<span class="token comment"># \u5F53\u6307\u5B9Anewkey\u9009\u9879\u65F6\uFF0C\u540E\u9762\u6307\u5B9Arsa:bits\u8BF4\u660E\u4EA7\u751Frsa\u5BC6\u94A5\uFF0C\u4F4D\u6570\u7531bits\u6307\u5B9A\u3002\u6307\u5B9Adsa:file\u8BF4\u660E\u4EA7\u751Fdsa\u5BC6\u94A5\uFF0Cfile\u662F\u6307\u751F\u6210dsa\u5BC6\u94A5\u7684\u53C2\u6570\u6587\u4EF6(\u7531dsaparam\u751F\u6210)</span>
<span class="token comment">#</span>
<span class="token comment"># [in/out/inform/outform/keyform]</span>
<span class="token comment">#</span>
<span class="token comment"># in\u9009\u9879\u6307\u5B9A\u8BC1\u4E66\u8BF7\u6C42\u6587\u4EF6\uFF0C\u5F53\u67E5\u770B\u8BC1\u4E66\u8BF7\u6C42\u5185\u5BB9\u6216\u8005\u751F\u6210\u81EA\u7B7E\u540D\u8BC1\u4E66\u7684\u65F6\u5019\u4F7F\u7528</span>
<span class="token comment">#</span>
<span class="token comment"># out\u9009\u9879\u6307\u5B9A\u8BC1\u4E66\u8BF7\u6C42\u6216\u8005\u81EA\u7B7E\u540D\u8BC1\u4E66\u6587\u4EF6\u540D\uFF0C\u6216\u8005\u516C\u94A5\u6587\u4EF6\u540D(\u5F53\u4F7F\u7528pubkey\u9009\u9879\u65F6\u7528\u5230)\uFF0C\u4EE5\u53CA\u5176\u4ED6\u4E00\u4E9B\u8F93\u51FA\u4FE1\u606F\u3002</span>
<span class="token comment">#</span>
<span class="token comment"># inform\u3001outform\u3001keyform\u5206\u522B\u6307\u5B9A\u4E86in\u3001out\u3001key\u9009\u9879\u6307\u5B9A\u7684\u6587\u4EF6\u683C\u5F0F\uFF0C\u9ED8\u8BA4\u662FPEM\u683C\u5F0F\u3002</span>
<span class="token comment"># -batch \u4ECE\u914D\u7F6E\u6587\u4EF6\u8BFB\u53D6\u4E3B\u4F53\u4FE1\u606F\uFF0C\u6216\u8005\u914D\u5408-subj\u6765\u6307\u5B9A\u4E3B\u4F53\u4FE1\u606F</span>
<span class="token comment"># -nodes \u79D8\u94A5\u6587\u4EF6\u4E0D\u7528\u53E3\u4EE4\u52A0\u5BC6</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="\u5220\u9664\u79C1\u94A5\u4E2D\u7684\u5BC6\u7801" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u79C1\u94A5\u4E2D\u7684\u5BC6\u7801" aria-hidden="true">#</a> \u5220\u9664\u79C1\u94A5\u4E2D\u7684\u5BC6\u7801</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>openssl rsa -in private.key -out private.key
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="\u751F\u6210\u81EA\u7B7E\u540D\u8BC1\u4E66-rootca" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210\u81EA\u7B7E\u540D\u8BC1\u4E66-rootca" aria-hidden="true">#</a> \u751F\u6210\u81EA\u7B7E\u540D\u8BC1\u4E66(RootCA)</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>openssl req -x509 -days <span class="token number">3650</span> -in server.csr -key private.key -out server.crt
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="\u751F\u6210\u8BC1\u4E66\u94FE" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210\u8BC1\u4E66\u94FE" aria-hidden="true">#</a> \u751F\u6210\u8BC1\u4E66\u94FE</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">rm</span> -rf /etc/pki/CA/*.old
<span class="token function">touch</span> /etc/pki/CA/index.txt

<span class="token function">touch</span> /etc/pki/CA/index.txt.attr
<span class="token builtin class-name">echo</span> <span class="token string">&quot;unique_subject = no&quot;</span> <span class="token operator">&gt;</span> index.txt.attr

<span class="token builtin class-name">echo</span> 01 <span class="token operator">&gt;</span> /etc/pki/CA/serial
<span class="token builtin class-name">echo</span> 02 <span class="token operator">&gt;</span> /etc/pki/CA/serial

<span class="token comment"># \u4E8C\u7EA7\u8BC1\u4E66 chain</span>
openssl ca -extensions v3_ca -in server.csr -days <span class="token number">3650</span> -out chain.crt -cert server.crt -keyfile private.key

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="openssl-\u5BF9\u79F0\u52A0\u5BC6" tabindex="-1"><a class="header-anchor" href="#openssl-\u5BF9\u79F0\u52A0\u5BC6" aria-hidden="true">#</a> openssl \u5BF9\u79F0\u52A0\u5BC6</h2><blockquote><p>\u57FA\u4E8E key iv salt \u7684\u52A0\u5BC6\u89E3\u5BC6</p></blockquote><h2 id="openssl-\u975E\u5BF9\u79F0\u52A0\u5BC6\u89E3\u5BC6" tabindex="-1"><a class="header-anchor" href="#openssl-\u975E\u5BF9\u79F0\u52A0\u5BC6\u89E3\u5BC6" aria-hidden="true">#</a> openssl \u975E\u5BF9\u79F0\u52A0\u5BC6\u89E3\u5BC6</h2><blockquote><p>\u5BC6\u94A5\u5BF9,\u516C\u94A5\u52A0\u5BC6/\u79C1\u94A5\u89E3\u5BC6 \u79C1\u94A5\u7B7E\u540D/\u516C\u94A5\u9A8C\u8BC1</p></blockquote><ul><li>\u751F\u6210\u79C1\u94A5: openssl genrsa .....</li><li>\u63D0\u53D6\u516C\u94A5: openssl rsa -in rsa_private_key.pem -pubout -out rsa_public_key.pem</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u516C\u94A5\u52A0\u5BC6</span>
openssl rsautl -encrypt -in readme.txt -inkey rsa_public_key.pem -pubin -out hello.en
<span class="token comment">#\u79C1\u94A5\u89E3\u5BC6</span>
openssl rsautl -decrypt -in hello.en -inkey rsa_private_key.pem -out hello.de
<span class="token comment"># -in file        input file</span>
<span class="token comment"># -out file       output file</span>
<span class="token comment"># -inkey file     input key</span>
<span class="token comment"># -keyform arg    private key format - default PEM</span>
<span class="token comment"># -pubin          input is an RSA public</span>
<span class="token comment"># -certin         input is a certificate carrying an RSA public key</span>
<span class="token comment"># -ssl            use SSL v2 padding</span>
<span class="token comment"># -raw            use no padding</span>
<span class="token comment"># -pkcs           use PKCS#1 v1.5 padding (default)</span>
<span class="token comment"># -oaep           use PKCS#1 OAEP</span>
<span class="token comment"># -sign           sign with private key</span>
<span class="token comment"># -verify         verify with public key</span>
<span class="token comment"># -encrypt        encrypt with public key</span>
<span class="token comment"># -decrypt        decrypt with private key</span>
<span class="token comment"># -hexdump        hex dump output</span>
<span class="token comment"># -engine e       use engine e, possibly a hardware device.</span>
<span class="token comment"># -passin arg    pass phrase source</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="smime" tabindex="-1"><a class="header-anchor" href="#smime" aria-hidden="true">#</a> smime</h3><blockquote><p>\u4E3B\u8981\u7528\u4E8E\u90AE\u4EF6\u534F\u8BAE</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u7B7E\u540D</span>
openssl smime -sign -in company.mobileconfig -out signed.mobileconfig -signer server.crt -inkey server.key -certfile cert-chain.crt -outform der -nodetach
<span class="token comment"># \u9A8C\u8BC1</span>
openssl smime -verify -in signed.mobileconfig -inform der -certfile chain.crt -CAfile server.crt

<span class="token comment"># -encrypt\uFF1A\u7528\u7ED9\u5B9A\u7684\u63A5\u53D7\u8005\u7684\u8BC1\u4E66\u52A0\u5BC6\u90AE\u4EF6\u4FE1\u606F\u3002\u8F93\u5165\u6587\u4EF6\u662F\u4E00\u4E2A\u6D88\u606F\u503C\uFF0C\u7528\u4E8E\u52A0\u5BC6\u3002\u8F93\u51FA\u6587\u4EF6\u662F\u4E00\u4E2A\u5DF2\u7ECF\u88AB\u52A0\u5BC6\u4E86\u7684MIME\u683C\u5F0F\u7684\u90AE\u4EF6\u4FE1\u606F\u3002</span>
<span class="token comment">#</span>
<span class="token comment"># -decrypt\uFF1A\u7528\u63D0\u4F9B\u7684\u8BC1\u4E66\u548C\u79C1\u94A5\u503C\u6765\u89E3\u5BC6\u90AE\u4EF6\u4FE1\u606F\u503C\u3002\u4ECE\u8F93\u5165\u6587\u4EF6\u4E2D\u83B7\u53D6\u5230\u5DF2\u7ECF\u52A0\u5BC6\u4E86\u7684MIME\u683C\u5F0F\u7684\u90AE\u4EF6\u4FE1\u606F\u503C\u3002\u89E3\u5BC6\u7684\u90AE\u4EF6\u4FE1\u606F\u503C\u88AB\u4FDD\u5B58\u5230\u8F93\u51FA\u6587\u4EF6\u4E2D\u3002</span>
<span class="token comment">#</span>
<span class="token comment"># -sign\uFF1A\u7528\u63D0\u4F9B\u7684\u8BC1\u4E66\u548C\u79C1\u94A5\u503C\u6765\u7B7E\u540D\u90AE\u4EF6\u4FE1\u606F\u503C\u3002\u8F93\u5165\u6587\u4EF6\u662F\u4E00\u4E2A\u6D88\u606F\u503C\uFF0C\u7528\u4E8E\u7B7E\u540D\u3002\u8F93\u51FA\u6587\u4EF6\u662F\u4E00\u4E2A\u5DF2\u7ECF\u88AB\u7B7E\u540D\u4E86\u7684MIME\u683C\u5F0F\u7684\u90AE\u4EF6\u4FE1\u606F\u3002</span>
<span class="token comment">#</span>
<span class="token comment"># -verify\uFF1A\u9A8C\u8BC1\u5DF2\u7ECF\u7B7E\u540D\u4E86\u7684\u90AE\u4EF6\u4FE1\u606F\u503C\u3002\u8F93\u5165\u6587\u4EF6\u548C\u8F93\u51FA\u6587\u4EF6\u90FD\u662F\u5DF2\u7ECF\u7B7E\u540D\u4E86\u7684\u90AE\u4EF6\u4FE1\u606F\u503C\u3002\u540C\u65F6\u652F\u6301\u6E05\u9664\u6587\u672C\u4EE5\u53CA\u4E0D\u900F\u660E\u7684\u7B7E\u540D\u3002</span>
<span class="token comment">#</span>
<span class="token comment"># -pk7out\uFF1A\u5C06\u4E00\u4E2APEM\u683C\u5F0F\u7684\u8F93\u5165\u4FE1\u606F\u8F6C\u6362\u4E3APKCS#7\u7ED3\u6784\u3002</span>
<span class="token comment">#</span>
<span class="token comment"># -nointern\uFF1A\u5BF9\u7B7E\u540D\u8005\u6765\u8BF4\uFF0C\u4E0D\u4ECE\u6D88\u606F\u4E2D\u67E5\u627E\u8BC1\u4E66\u3002</span>
<span class="token comment">#</span>
<span class="token comment"># -nosigs\uFF1A\u4E0D\u53BB\u9A8C\u8BC1\u7B7E\u540D\u503C\u3002</span>
<span class="token comment">#</span>
<span class="token comment"># -noverify\uFF1A\u4E0D\u53BB\u9A8C\u8BC1\u7B7E\u540D\u8005\u7684\u8BC1\u4E66\u4FE1\u606F\u3002</span>
<span class="token comment">#</span>
<span class="token comment"># -nocerts\uFF1A\u5F53\u7B7E\u540D\u7684\u65F6\u5019\u4E0D\u5305\u542B\u7B7E\u540D\u8005\u7684\u8BC1\u4E66\u4FE1\u606F\u503C\u3002</span>
<span class="token comment">#</span>
<span class="token comment"># -nodetach\uFF1A\u7528\u4E0D\u900F\u660E\u7684\u7B7E\u540D\u3002</span>
<span class="token comment">#</span>
<span class="token comment"># -binary\uFF1A\u4E0D\u8F6C\u6362\u4E8C\u8FDB\u5236\u6D88\u606F\u5230\u6587\u672C\u6D88\u606F\u503C\u3002</span>
<span class="token comment">#</span>
<span class="token comment"># -in file\uFF1A\u8F93\u5165\u6D88\u606F\u503C\uFF0C\u5B83\u4E00\u822C\u4E3A\u52A0\u5BC6\u4E86\u7684\u4EE5\u53CA\u7B7E\u540D\u4E86\u7684MINME\u7C7B\u578B\u7684\u6D88\u606F\u503C\u3002</span>
<span class="token comment">#</span>
<span class="token comment"># -inform SMIME|PEM|DER\uFF1A\u8F93\u5165\u6D88\u606F\u7684\u683C\u5F0F\u3002\u4E00\u822C\u4E3ASMIME|PEM|DER\u4E09\u79CD\u3002\u9ED8\u8BA4\u7684\u662FSMIME\u3002</span>
<span class="token comment">#</span>
<span class="token comment"># -certfile filename\uFF1A\u6DFB\u52A0filename\u4E2D\u6240\u6709\u7684\u8BC1\u4E66\u4FE1\u606F\u503C\u3002</span>
<span class="token comment">#</span>
<span class="token comment"># -signer file\uFF1A\u4E00\u4E2A\u7B7E\u540D\u8BC1\u4E66\uFF0C\u5F53\u7B7E\u540D\u6216\u653E\u5F03\u4E00\u4E2A\u7B7E\u540D\u6570\u636E\u65F6\u4F7F\u7528\u3002\u8FD9\u4E2A\u9009\u9879\u53EF\u4EE5\u88AB\u7528\u591A\u6B21\u3002\u5982\u679C\u4E00\u4E2A\u6D88\u606F\u5DF2\u7ECF\u88AB\u9A8C\u8BC1\u5E76\u9A8C\u8BC1\u901A\u8FC7\uFF0C\u5219\u5C06\u7B7E\u540D\u8005\u7684\u8BC1\u4E66\u653E\u5230file\u4E2D\u3002</span>
<span class="token comment">#</span>
<span class="token comment"># -recip file\uFF1A\u5B58\u653E\u63D0\u4F9B\u8005\u7684\u8BC1\u4E66\uFF0C\u4E3B\u8981\u7528\u4E8E\u89E3\u5BC6\u6D88\u606F\u503C\u3002\u8FD9\u4E2A\u8BC1\u4E66\u5FC5\u987B\u5339\u914D\u591A\u4E2A\u63D0\u4F9B\u8005\u7684\u6D88\u606F\u3002</span>
<span class="token comment">#</span>
<span class="token comment"># -passin arg\uFF1A\u79C1\u94A5\u4FDD\u62A4\u53E3\u4EE4\u6765\u6E90\u3002</span>
<span class="token comment">#</span>
<span class="token comment"># -inkey file\uFF1A\u79C1\u94A5\u5B58\u653E\u5730\u5740\uFF0C\u4E3B\u8981\u7528\u4E8E\u7B7E\u540D\u6216\u89E3\u5BC6\u6570\u636E\u3002\u8FD9\u4E2A\u79C1\u94A5\u503C\u5FC5\u987B\u5339\u914D\u76F8\u5E94\u7684\u8BC1\u4E66\u4FE1\u606F\u3002\u5982\u679C\u8FD9\u4E2A\u9009\u9879\u6CA1\u6709\u88AB\u6307\u5B9A\uFF0C\u79C1\u94A5\u5FC5\u987B\u5305\u542B\u5230\u8BC1\u4E66\u8DEF\u5F84\u4E2D\uFF08-recip\u3001-signer\uFF09\u3002</span>
<span class="token comment">#</span>
<span class="token comment"># -keyform PEM |ENGINE\uFF1A\u79C1\u94A5\u683C\u5F0F\u3002\u4E00\u822C\u4E3APEM \u3001ENGINE\u683C\u5F0F\u3002</span>
<span class="token comment">#</span>
<span class="token comment"># -out file\uFF1A\u5DF2\u7ECF\u88AB\u89E3\u5BC6\u6216\u9A8C\u8BC1\u901A\u8FC7\u7684\u6570\u636E\u7684\u4FDD\u5B58\u4F4D\u7F6E\u3002</span>
<span class="token comment">#</span>
<span class="token comment"># -outform SMIME|PEM|DER\uFF1A\u8F93\u51FA\u683C\u5F0F\u3002\u4E00\u822C\u4E3ASMIME\u3001PEM\u3001DER\u4E09\u79CD\u3002\u9ED8\u8BA4\u7684\u683C\u5F0F\u662FSMIME\u3002</span>
<span class="token comment">#</span>
<span class="token comment"># -content file\uFF1A\u5305\u542B\u5206\u79BB\u7684\u4E0A\u4E0B\u6587\u8DEF\u5F84\uFF0C\u5B83\u4EC5\u4EC5\u53EA\u80FD\u7528\u4E8Everify\u64CD\u4F5C\u3002</span>
<span class="token comment">#</span>
<span class="token comment"># -to addr\uFF1A\u6709\u5173\u7684\u90AE\u4EF6\u4FE1\u606F\u503C\u5934\u90E8\u3002\u63A5\u6536\u7684\u5730\u5740\u3002</span>
<span class="token comment">#</span>
<span class="token comment"># -from ad\uFF1A\u6709\u5173\u7684\u90AE\u4EF6\u4FE1\u606F\u503C\u5934\u90E8\u3002\u53D1\u9001\u7684\u5730\u5740\u3002</span>
<span class="token comment">#</span>
<span class="token comment"># -subject s\uFF1A\u9881\u53D1\u8005\u4FE1\u606F\u503C\u3002</span>
<span class="token comment">#</span>
<span class="token comment"># -text\uFF1A\u6253\u5370\u51FAS/MIME\u90AE\u4EF6\u7684\u5404\u4E2A\u90E8\u4EF6\u3002</span>
<span class="token comment">#</span>
<span class="token comment"># -CApath directory\uFF1A\u8BBE\u7F6E\u4FE1\u4EFBCA\u6587\u4EF6\u6240\u5728\u8DEF\u5F84\uFF0C\u6B64\u8DEF\u5F84\u4E2D\u7684ca\u6587\u4EF6\u540D\u91C7\u7528\u7279\u6B8A\u7684\u5F62\u5F0F\uFF1Axxx.0\uFF0C\u5176\u4E2Dxxx\u4E3ACA\u8BC1\u4E66\u6301\u6709\u8005\u7684\u54C8\u5E0C\u503C\uFF0C\u5B83\u901A\u8FC7x509 -hash\u547D\u4EE4\u83B7\u5F97\u3002</span>
<span class="token comment">#</span>
<span class="token comment"># -CAfile filename\uFF1A\u67D0\u6587\u4EF6\uFF0C\u91CC\u9762\u662F\u6240\u6709\u4F60\u4FE1\u4EFB\u7684CA\u7684\u8BC1\u4E66\u7684\u5185\u5BB9\u3002\u5F53\u4F60\u8981\u5EFA\u7ACBclient\u7684\u8BC1\u4E66\u94FE\u7684\u65F6\u5019\u4E5F\u9700\u8981\u7528\u5230\u8FD9\u4E2A\u6587\u4EF6\u3002</span>
<span class="token comment">#</span>
<span class="token comment"># -crl_check\u3001-crl_check_all\uFF1A\u68C0\u67E5\u5BA2\u6237\u7AEF\u7684\u8BC1\u4E66\u662F\u5426\u5728CA\u7684\u5E9F\u9664\u5217\u8868\u4E2D\u3002CRL\uFF08s\uFF09\u5728\u8BC1\u4E66\u6587\u4EF6\u4E2D\u3002crl_check_all\u8868\u793A\u8981\u68C0\u67E5\u6240\u6709\u7684CA\u8BC1\u4E66\u4E2D\u7684\u5E9F\u9664\u5217\u8868\u3002</span>
<span class="token comment">#</span>
<span class="token comment"># -indef\u3001-stream\uFF1A\u8FD9\u4E24\u4E2A\u9009\u9879\u5BF9I/O\u6D41\u8FDB\u884C\u7F16\u7801\u64CD\u4F5C\u3002</span>
<span class="token comment">#</span>
<span class="token comment"># -noindef\uFF1A\u4E0D\u5BF9\u6570\u636E\u8FDB\u884C\u7F16\u7801\u64CD\u4F5C\u3002</span>
<span class="token comment">#</span>
<span class="token comment"># -md digest\uFF1A\u5F53\u7B7E\u540D\u6216\u653E\u5F03\u7B7E\u540D\u64CD\u4F5C\u65F6\u7528\u7684\u6458\u8981\u7B97\u6CD5\u3002\u9ED8\u8BA4\u7684\u6458\u8981\u7B97\u6CD5\u4E3Asha1\u3002</span>
<span class="token comment">#</span>
<span class="token comment"># -rand file(s)\uFF1A\u6307\u5B9A\u968F\u673A\u6570\u79CD\u5B50\u6587\u4EF6\uFF0C\u591A\u4E2A\u6587\u4EF6\u95F4\u7528\u5206\u9694\u7B26\u5206\u5F00\uFF0Cwindows\u7528\u201C;\u201D\uFF0COpenVMS\u7528\u201C,\u201C\uFF0C\u5176\u4ED6\u7CFB\u7EDF\u7528\u201C\uFF1A\u201D\u3002</span>
<span class="token comment">#</span>
<span class="token comment"># cert.pem\uFF1A\u63D0\u4F9B\u8005\u7684\u8BC1\u4E66\u4FE1\u606F\u3002</span>
<span class="token comment">#</span>
<span class="token comment"># -des, -des3, -seed, -rc2-40, -rc2-64, -rc2-128, -aes128, -aes192, -aes256\uFF0C-camellia128, -camellia192, -camellia256\uFF1A\u6307\u5B9A\u7684\u79C1\u94A5\u4FDD\u62A4\u52A0\u5BC6\u7B97\u6CD5\u3002\u9ED8\u8BA4\u7684\u7B97\u6CD5\u662Frc2-40</span>


</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br></div></div><h2 id="p12-\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#p12-\u683C\u5F0F" aria-hidden="true">#</a> p12 \u683C\u5F0F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>openssl genrsa -out ios.key 2048
openssl req -new -sha256 -key ios.key -out ios.csr

openssl x509 -in ios_development.cer -inform DER -outform PEM -out ios_distribution.pem
openssl pkcs12 -export -inkey ios.key -in ios_distribution.pem -out ios_distribution.p12
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> Docker</h2><p>\u4FEE\u6539 docker \u65F6\u533A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cp</span> /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="jenkins" tabindex="-1"><a class="header-anchor" href="#jenkins" aria-hidden="true">#</a> Jenkins</h2><p>shell \u811A\u672C\u4FDD\u6301\u72B6\u6001, \u52A0\u8F7D\u73AF\u5883\u53D8\u91CF:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">BUILD_ID</span><span class="token operator">=</span>DONTKILLME
<span class="token builtin class-name">.</span> /etc/profile
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="fiddler" tabindex="-1"><a class="header-anchor" href="#fiddler" aria-hidden="true">#</a> Fiddler</h2><p>\u663E\u793A IP, \u8F93\u51FA websocket \u65E5\u5FD7:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Main<span class="token punctuation">(</span><span class="token punctuation">)</span>: FiddlerObject.UI.lvSessions.AddBoundColumn<span class="token punctuation">(</span><span class="token string">&quot;ServerIP&quot;</span>, <span class="token number">120</span>, <span class="token string">&quot;X-HostIP&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

class Handlers:
static <span class="token keyword">function</span> OnWebSocketMessage<span class="token punctuation">(</span>oMsg: WebSocketMessage<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        // Log Message to the LOG tab
        FiddlerApplication.Log.LogString<span class="token punctuation">(</span>oMsg.ToString<span class="token punctuation">(</span><span class="token punctuation">))</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="\u5185\u7F6E\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5185\u7F6E\u547D\u4EE4" aria-hidden="true">#</a> \u5185\u7F6E\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token number">1</span>. <span class="token keyword">select</span> xxx:  \u9009\u62E9xxx\u7C7B\u578B\u7684,  \u4F8B\u5982 <span class="token keyword">select</span> html , <span class="token keyword">select</span> image ,select video<span class="token punctuation">..</span><span class="token punctuation">..</span> , content-type\u7684\u7C7B\u578B
<span class="token number">2</span>. allbut xxxx: allbut image--<span class="token operator">&gt;</span>\u53EA\u9009\u62E9\u56FE\u7247\u7C7B\u578B\u7684, \u4F1A\u628A\u5176\u5B83\u6355\u83B7\u90FD\u5220\u9664<span class="token operator">!</span><span class="token operator">!</span><span class="token operator">!</span><span class="token operator">!</span>
<span class="token number">3</span>. ?xxx: \u9009\u62E9url\u4E2D\u5305\u542Bxxx\u7684
<span class="token number">4</span>. <span class="token punctuation">\\</span><span class="token operator">&gt;</span>size <span class="token operator">&lt;</span>size: \u8FC7\u6EE4\u54CD\u5E94\u5185\u5BB9\u5927\u5C0F, \u53EA\u80FD\u5199\u6570\u5B57 <span class="token operator">&gt;</span><span class="token number">40000</span>   \u5355\u4F4D<span class="token punctuation">(</span>b<span class="token punctuation">)</span>
<span class="token number">5</span>. @host: \u8BF7\u6C42url\u5305\u542Bxxx\u7684, \u4F8B\u5982:  @oschina.net
<span class="token number">6</span>. <span class="token operator">=</span>status: <span class="token operator">=</span><span class="token number">200</span> <span class="token operator">==</span><span class="token number">404</span> \u8FC7\u6EE4\u54CD\u5E94\u7801
<span class="token number">7</span>. Bpafter\uFF0C Bps, bpv, bpm, bpu: \u65AD\u70B9\u547D\u4EE4,  \u4E5F\u53EF\u4EE5\u5728filters\u4E2D\u8BBE\u7F6E
   Bpafter xxx: \u4E2D\u65AD URL \u5305\u542B\u6307\u5B9A\u5B57\u7B26\u7684\u5168\u90E8 session \u54CD\u5E94
    Bps xxx: \u4E2D\u65AD HTTP \u54CD\u5E94\u72B6\u6001\u4E3A\u6307\u5B9A\u5B57\u7B26\u7684\u5168\u90E8 session \u54CD\u5E94\u3002
    Bpv xxx: \u4E2D\u65AD\u6307\u5B9A\u8BF7\u6C42\u65B9\u5F0F\u7684\u5168\u90E8 session \u54CD\u5E94
    Bpm xxx: \u4E2D\u65AD\u6307\u5B9A\u8BF7\u6C42\u65B9\u5F0F\u7684\u5168\u90E8 session \u54CD\u5E94\u3002\u7B49\u540C\u4E8Ebpv xxx
    Bpu xxx:\u4E0Ebpafter\u7C7B\u4F3C\u3002
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="\u8FDC\u7A0B\u8C03\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u8FDC\u7A0B\u8C03\u8BD5" aria-hidden="true">#</a> \u8FDC\u7A0B\u8C03\u8BD5</h2><ol><li><p>Tomcat <code>startup.sh</code> \u5F00\u5934</p><blockquote><p>declare -x CATALINA_OPTS=&quot;-server -Xdebug -Xnoagent -Djava.compiler=NONE -Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=3316&quot;</p></blockquote></li><li><p>Jar</p><blockquote><p>java -jar -Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=3316 xxx.jar</p></blockquote></li></ol><h2 id="firewalld" tabindex="-1"><a class="header-anchor" href="#firewalld" aria-hidden="true">#</a> Firewalld</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>firewall-cmd --zone<span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">80</span>-9000/tcp --permanent

firewall-cmd --zone<span class="token operator">=</span>public --remove-port<span class="token operator">=</span><span class="token number">80</span>/tcp --permanent

firewall-cmd --permanent --add-rich-rule<span class="token operator">=</span><span class="token string">&quot;rule family=&quot;</span>ipv4<span class="token string">&quot; source address=&quot;</span><span class="token number">1.1</span>.1.1<span class="token string">&quot; port protocol=&quot;</span>tcp<span class="token string">&quot; port=&quot;</span><span class="token number">8080</span><span class="token string">&quot; accept&quot;</span>
firewall-cmd --permanent --remove-rich-rule<span class="token operator">=</span><span class="token string">&quot;rule family=&quot;</span>ipv4<span class="token string">&quot; source address=&quot;</span><span class="token number">1.1</span>.1.1<span class="token string">&quot; port protocol=&quot;</span>tcp<span class="token string">&quot; port=&quot;</span><span class="token number">8080</span><span class="token string">&quot; accept&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="jdk-\u73AF\u5883\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#jdk-\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a> JDK \u73AF\u5883\u53D8\u91CF</h2><p>Windows:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">JAVA_HOME</span><span class="token operator">==</span>D:<span class="token punctuation">\\</span>dev<span class="token punctuation">\\</span>Java<span class="token punctuation">\\</span>jdk1.6.0_12<span class="token punctuation">\\</span>
<span class="token assign-left variable">classpath</span><span class="token operator">==</span>.<span class="token punctuation">;</span>%JAVA_HOME%<span class="token punctuation">\\</span>lib<span class="token punctuation">;</span>%JAVA_HOME%<span class="token punctuation">\\</span>lib<span class="token punctuation">\\</span>tools.jar
<span class="token assign-left variable">path</span><span class="token operator">==</span>%JAVA_HOME%<span class="token punctuation">\\</span>bin<span class="token punctuation">;</span>%JAVA_HOME%<span class="token punctuation">\\</span>jre<span class="token punctuation">\\</span>bin
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Linux: /etc/profile</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/home/jdk1.8.0_152
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">$JAVA_HOME</span>/bin:<span class="token environment constant">$PATH</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">CLASSPATH</span><span class="token operator">=</span>.:<span class="token variable">$JAVA_HOME</span>/lib/dt.jar:<span class="token variable">$JAVA_HOME</span>/lib/tools.jar
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="gradle" tabindex="-1"><a class="header-anchor" href="#gradle" aria-hidden="true">#</a> Gradle</h2><p>gradle \u4EFB\u52A1: \u5F80 nexus \u53D1\u5E03 jar</p><div class="language-groovy ext-groovy line-numbers-mode"><pre class="language-groovy"><code><span class="token comment">//Maven\u4ED3\u5E93\u7684URL</span>
<span class="token keyword">def</span> MAVEN_REPO_RELEASE_URL<span class="token operator">=</span> <span class="token string">&#39;http://xxxx/nexus/content/repositories/releases/&#39;</span>
<span class="token keyword">def</span> MAVEN_REPO_SNAPSHOT_URL<span class="token operator">=</span> <span class="token string">&#39;http://xxxxx/nexus/content/repositories/snapshots/&#39;</span>
<span class="token comment">//\u767B\u5F55nexus \u7684\u7528\u6237\u540D</span>
<span class="token keyword">def</span> NEXUS_USERNAME<span class="token operator">=</span><span class="token string">&#39;admin&#39;</span>
<span class="token comment">//\u767B\u5F55nexus \u7684\u5BC6\u7801</span>
<span class="token keyword">def</span> NEXUS_PASSWORD<span class="token operator">=</span><span class="token string">&#39;admin&#39;</span>
<span class="token keyword">def</span> ARTIFACT_ID <span class="token operator">=</span> <span class="token string">&#39;demo&#39;</span>
<span class="token comment">// type</span>
<span class="token keyword">def</span> TYPE <span class="token operator">=</span> <span class="token string">&#39;jar&#39;</span>
<span class="token comment">//description</span>
<span class="token keyword">def</span> DESCRIPTION <span class="token operator">=</span> <span class="token string">&#39;\u8FD9\u91CC\u662F\u63CF\u8FF0&#39;</span>

uploadArchives <span class="token punctuation">{</span>
    configuration <span class="token operator">=</span> configurations<span class="token punctuation">.</span>archives
    repositories <span class="token punctuation">{</span>
        mavenDeployer <span class="token punctuation">{</span>
            <span class="token function">snapshotRepository</span><span class="token punctuation">(</span>url<span class="token punctuation">:</span> MAVEN_REPO_SNAPSHOT_URL<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">authentication</span><span class="token punctuation">(</span>userName<span class="token punctuation">:</span> NEXUS_USERNAME<span class="token punctuation">,</span> password<span class="token punctuation">:</span> NEXUS_PASSWORD<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token function">repository</span><span class="token punctuation">(</span>url<span class="token punctuation">:</span> MAVEN_REPO_RELEASE_URL<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">authentication</span><span class="token punctuation">(</span>userName<span class="token punctuation">:</span> NEXUS_USERNAME<span class="token punctuation">,</span> password<span class="token punctuation">:</span> NEXUS_PASSWORD<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token function">repository</span><span class="token punctuation">(</span>url<span class="token punctuation">:</span> <span class="token function">uri</span><span class="token punctuation">(</span><span class="token string">&#39;C:\\\\Users\\\\dd\\\\.m2\\\\repository&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//\u5B9A\u4E49\u672C\u5730maven\u4ED3\u5E93\u7684\u5730\u5740</span>
            <span class="token function">repository</span><span class="token punctuation">(</span>url<span class="token punctuation">:</span> <span class="token function">uri</span><span class="token punctuation">(</span><span class="token string">&#39;C:\\\\Users\\\\dd\\\\.gradle\\\\caches\\\\modules-2\\\\files-2.1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//\u5B9A\u4E49\u672C\u5730Gradle\u4ED3\u5E93\u7684\u5730\u5740</span>
            pom<span class="token punctuation">.</span>project <span class="token punctuation">{</span>
                version version
                artifactId ARTIFACT_ID
                groupId group
                packaging TYPE
                description DESCRIPTION
                licenses <span class="token punctuation">{</span>
                    license <span class="token punctuation">{</span>
                        name <span class="token string">&#39;The Apache Software License, Version 2.0&#39;</span>
                        url <span class="token string">&#39;http://www.apache.org/licenses/LICENSE-2.0.txt&#39;</span>
                        distribution <span class="token string">&#39;xxxxxx&#39;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div><h2 id="jira-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#jira-\u914D\u7F6E" aria-hidden="true">#</a> jira \u914D\u7F6E</h2><p><code>setenv.sh</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>JVM_SUPPORT_RECOMMENDED_ARGS:<span class="token operator">=</span><span class="token string">&quot;-Duser.timezone=Asia/Shanghai&quot;</span>

<span class="token builtin class-name">export</span> <span class="token assign-left variable">CATALINA_OPTS</span><span class="token operator">=</span><span class="token string">&quot;-javaagent:/var/atlassian/application-data/jira/agent.jar <span class="token variable">\${CATALINA_OPTS}</span>&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><code>confluence setenv.sh</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">CATALINA_OPTS</span><span class="token operator">=</span><span class="token string">&quot;-javaagent:/var/atlassian/application-data/confluence/agent.jar <span class="token variable">\${CATALINA_OPTS}</span>&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><code>bitbucket _start-webapp.sh</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">JAVA_OPTS</span><span class="token operator">=</span><span class="token string">&quot;-javaagent:/var/atlassian/application-data/bitbucket/agent.jar -classpath <span class="token variable">$INST_DIR</span>/app <span class="token variable">$JAVA_OPTS</span> <span class="token variable">$BITBUCKET_ARGS</span> <span class="token variable">$JMX_OPTS</span> <span class="token variable">$JVM_REQUIRED_ARGS</span> <span class="token variable">$JVM_SUPPORT_RECOMMENDED_ARGS</span>&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>`,54);function y(_,E){const a=l("ExternalLinkIcon");return t(),c(r,null,[u,m,b,n("p",null,[k,n("a",d,[h,e(a)])]),g,n("blockquote",null,[n("p",null,[n("a",v,[f,e(a)])])]),x],64)}var M=o(i,[["render",y]]);export{M as default};
