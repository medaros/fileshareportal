#!/bin/bash

clear

if [ ! -z "$1" ]; then

    echo
    echo "- @medaros let the magic begin :p"
    echo
    echo

    git add .
    git commit -m "$1"

    git push origin develop

    echo
    echo
    echo "Push fini sur << develop >>"
    echo

elif [ "$1" == "pull" ]; then

    git pull origin develop

    echo
    echo
    echo "Pull fini de develop sur cette branche"
    echo

elif [ "$1" == "fetch" ]; then

    git fetch

    echo
    echo
    echo "Fetch fini !"
    echo

else
    echo
    echo "- Hello, je te montre comment utiliser ce baby script :"
    echo
    echo "snap phraseCommit"
    echo
    echo "phraseCommit => sans -m, juste la phrase"
    echo "only ?       => si tu veux push juste sur ta branche sans develop, sinon tu le tappe pas"
    echo
    echo "- Tu peux aussi tapper (snap pull) qui pull de develop"
    echo "- Bref ! c'est a toi de jouer ;p"
    echo
fi
